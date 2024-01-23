import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getBigCategory } from "../../api/categoryAPI";
import { logout } from "../../api/authAPI";
import { isTokenEixst, removeCookie, getCookie } from "../../utils/cookieUtils";

import {
  IoSearchOutline,
  IoBagOutline,
  IoPersonOutline,
} from "react-icons/io5";

import logoImage from "../../image/logo.png";
import * as HeaderStyle from "./Header.styled";

const menu = ["SHOES", "MAN", "WOMAN"];

export default function Header() {
  const navigate = useNavigate();

  const [bigCategoryList, setBigCategoryList] = useState([]);
  const [isAdmin, checkAdmin] = useState(false);
  const [isLogin, setLoginStatus] = useState(false);

  useEffect(() => {
    refresh();
    if (getCookie("user_id") === "admin") {
      checkAdmin(true);
    }
  }, []);

  const handlingLogin = () => {
    setLoginStatus(isTokenEixst("token"));
  };

  const refresh = () => {
    getBigCategory().then((response) => {
      setBigCategoryList(response);
    });
    handlingLogin();
  };

  const clickLogoutBtn = () => {
    if (window.confirm("로그아웃을 하시겠습니까?")) {
      logout();
      alert("로그아웃 되었습니다.");

      setLoginStatus(false);
      removeCookie("user_id");
      navigate("/");
    } else {
      alert("취소되었습니다.");
    }
  };

  return (
    <HeaderStyle.HeaderContainer>
      <HeaderStyle.HeaderWrap>
        <Link to="/">
          <HeaderStyle.Logo>
            <img src={logoImage} alt="Sinbad logo" />
          </HeaderStyle.Logo>
        </Link>

        <HeaderStyle.Navigation>
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </HeaderStyle.Navigation>

        <HeaderStyle.Icon>
          <HeaderStyle.Search>
            <HeaderStyle.Input />
            <button>
              <IoSearchOutline size="18px" />
            </button>
          </HeaderStyle.Search>

          <button>
            <IoPersonOutline size="18px" />
          </button>

          <button>
            <IoBagOutline size="18px" />
          </button>
        </HeaderStyle.Icon>
      </HeaderStyle.HeaderWrap>
    </HeaderStyle.HeaderContainer>
  );
}
