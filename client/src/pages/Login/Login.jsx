import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../global/constants';
import { getUser } from './LoginAPI';
import Button from '../../components/Button/Button';
import Logo from '../../image/logo.png';
import * as S from './Login.styles';

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
      <h3>
        <img src={Logo} alt="SINBA_D" />
      </h3>
      <div>
        <Button color="kakao" size="long" text="카카오톡으로 로그인" />
      </div>
    </S.Container>
  );
}

export default Login;
