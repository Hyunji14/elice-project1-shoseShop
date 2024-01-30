import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getBigCategory } from '../../../pages/Admin/Category/CategoryAPI';
import { logout } from '../../../pages/Login/LoginAPI';
import {
  isTokenEixst,
  removeCookie,
  getCookie,
} from '../../../utils/cookieUtils';

import {
  IoSearchOutline,
  IoBagOutline,
  IoPersonOutline,
} from 'react-icons/io5';

import logoImage from '../../../image/logo.png';

import * as S from './Header.styles';

const menu = ['SHOES', 'MAN', 'WOMAN'];

export default function Header() {
  const navigate = useNavigate();
  const [bigCategoryList, setBigCategoryList] = useState([]);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [isLogin, setLoginStatus] = useState(false);

  useEffect(() => {
    refresh();
    if (getCookie('user_id') === 'admin') {
      setCheckAdmin(true);
    }
  }, []);

  const handlingLogin = () => {
    setLoginStatus(isTokenEixst('token'));
  };

  const refresh = () => {
    getBigCategory().then((response) => {
      setBigCategoryList(response);
    });
    handlingLogin();
  };

  const clickLogoutBtn = () => {
    if (window.confirm('로그아웃을 하시겠습니까?')) {
      logout();
      alert('로그아웃 되었습니다.');

      setLoginStatus(false);
      removeCookie('user_id');
      navigate('/');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <S.Container>
      <S.Wrap>
        <Link to='/'>
          <S.Logo>
            <img src={logoImage} alt='Sinbad logo' />
          </S.Logo>
        </Link>

        <S.Navigation>
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </S.Navigation>

        <S.Icon>
          <S.Search>
            <S.Input placeholder='상품을 검색해보세요.' />
            <button>
              <IoSearchOutline size='18px' />
            </button>
          </S.Search>

          <button onClick={() => navigate('/auth/login')}>
            <IoPersonOutline size='18px' />
          </button>

          <button onClick={() => navigate('/cart')}>
            <IoBagOutline size='18px' />
          </button>
        </S.Icon>
      </S.Wrap>
    </S.Container>
  );
}
