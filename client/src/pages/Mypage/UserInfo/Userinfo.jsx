import { useEffect, useState } from 'react';
import { getCookie, removeCookie } from '../../../utils/cookieUtils';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUserInfo, withDrawUser } from './userInfoAPI';

import * as S from './UserInfo.styles';

function Userinfo() {
  const navigate = useNavigate();
  const [user_id, setUserId] = useState(getCookie('user_id'));
  const [userName, setUserName] = useState('');
  const [userFirstPassword, setUserFirstPassword] = useState('');
  const [userLastPassword, setUserLastPassword] = useState('');
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  // 사용자 기본 이름 불러오기
  useEffect(() => {
    getUser(user_id).then((res) => setUserName(res.name));
  }, []);

  const clickUpdateButton = (e) => {
    e.preventDefault();
    if (
      userName.length > 1 &&
      passwordCheck(userFirstPassword) &&
      passwordDoubleCheck(userFirstPassword, userLastPassword)
    ) {
      updateUserInfo({
        id: user_id,
        name: userName,
        password: userFirstPassword,
      });
      alert('정보 수정 완료! ^ㅁ^');
      navigate('/user/order');
    }
  };

  const clickWithDrawBtn = () => {
    if (
      window.confirm('정말 회원 탈퇴를 진행하시겠습니까? (가지 말아요 ㅠㅁㅠ)')
    ) {
      withDrawUser(user_id);
      alert('회원탈퇴가 완료 되었습니다.');
      removeCookie('user_id');
      removeCookie('token');
      window.location.replace('/');
    } else {
      alert('취소되었습니다.');
    }
  };

  // 비밀번호 형식 체크
  const passwordCheck = (password) => {
    if (userFirstPassword.match(passwordRegEx) === null) {
      alert('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setUserFirstPassword('');
      setUserLastPassword('');
      return false;
    } else {
      return true;
    }
  };

  // 패스워드 일치 확인
  const passwordDoubleCheck = (userFirstPassword, userLastPassword) => {
    if (userFirstPassword !== userLastPassword) {
      alert('비밀번호가 다릅니다.');
      setUserFirstPassword('');
      setUserLastPassword('');
      return false;
    } else {
      return true;
    }
  };

  return (
    <S.Container>
      <h3>SINBA_D</h3>

      <S.UserInfoContextForm>
        <input
          type='text'
          placeholder='이름'
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='비밀번호'
          required
          value={userFirstPassword}
          onChange={(e) => setUserFirstPassword(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='비밀번호 확인'
          required
          value={userLastPassword}
          onChange={(e) => setUserLastPassword(e.target.value)}
        />
        <br />
        <S.UserInfoModifyButton
          type='submit'
          value='수정하기'
          onClick={clickUpdateButton}
        >
          수정하기
        </S.UserInfoModifyButton>
        <S.UserWithdrawButton
          type='button'
          onClick={clickWithDrawBtn}
          className='form__input--delete-account-button'
        >
          탈퇴하기
        </S.UserWithdrawButton>
      </S.UserInfoContextForm>
    </S.Container>
  );
}

export default Userinfo;
