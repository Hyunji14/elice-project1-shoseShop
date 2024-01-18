import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Login.styles';
import { PATH } from '../../global/constants';
import { getUser } from './LoginAPI';

function Login() {
  const navigate = useNavigate();

  // 입력된 유저 아이디, 비밀번호
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // 이메일 형식 체크
  const emailRegEx =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const emailCheck = (userId) => {
    if (userId === 'admin') {
      return true;
    }
    if (emailRegEx.test(userId)) {
      return true;
    } else {
      alert('이메일 형식이 아닙니다. 다시 입력해주세요.');
      return false;
    }
  };

  // 유저 정보 Id(email) get
  const signIn = async () => {
    if (emailCheck(userId)) {
      getUser({ email: userId, password: userPassword }).then((data) => {
        if (data === 'no user') {
          alert('존재하지 않는 아이디입니다. 회원가입을 해주세요.');
          return;
        } else if (data === 'INCORRECT') {
          alert('비밀번호를 확인해주세요');
          return;
        }

        alert('로그인에 성공하였습니다.');
        navigate('/');
      });
    }
  };

  return (
    <S.Container>
      <h3>SINBA_D</h3>
      <S.LoginForm>
        <input
          type='email'
          placeholder='이메일'
          required
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type='password'
          placeholder='비밀번호'
          required
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <S.LoginButton type='button' value='로그인' onClick={signIn} />

        <Link to={PATH.join}>
          <S.SignUpButton>회원가입</S.SignUpButton>
        </Link>
      </S.LoginForm>
    </S.Container>
  );
}

export default Login;
