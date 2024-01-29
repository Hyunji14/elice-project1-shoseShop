import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCookie, removeCookie } from '../../../utils/cookieUtils';
import { getUser, updateUserInfo, withDrawUser } from './userInfoAPI';
import Title from '../../../components/Title/Title';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Address from '../../../components/Address/Address';
import * as S from './Userinfo.styles';

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
      <Title text="회원 정보 관리" />
      <form>
        <h3>닉네임</h3>
        <Input size="large" />
        <Button
          size="small"
          color="secondary"
          text="변경하기"
          clickHandler={clickUpdateButton}
        />
        <Button
          size="small"
          color="gray"
          text="탈퇴하기"
          clickHandler={clickWithDrawBtn}
        />
      </form>
      <form>
        <h3>배송지 정보</h3>
        <Address />
        <Button size="large" color="primary" text="수정하기" />
      </form>
    </S.Container>
  );
}

export default Userinfo;
