import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './AdminHeader.styles';
import LogoWhite from '../../../image/LogoWhite.png';

const adminMenu = ['카테고리 관리', '상품 관리', '주문 관리', '유저 관리'];

export default function AdminHeader() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
    switch (index) {
      case 0:
        navigate('/admin/category');
        break;
      case 1:
        navigate('/admin/manageproducts');
        break;
      case 2:
        navigate('/admin/ordermanagement');
        break;
      case 3:
        navigate('/admin/user');
        break;
      default:
        return;
    }
  };

  const onClickNavigateHome = () => {
    navigate('/');
  };

  return (
    <S.AdminHeaderContainer>
      <img src={LogoWhite} alt="SINBA_D" onClick={onClickNavigateHome} />
      <ul>
        {adminMenu.map((item, index) => (
          <S.AdminNavigation
            key={index}
            onClick={() => selectMenuHandler(index)}
            isSelected={index === currentTab}
          >
            {item}
          </S.AdminNavigation>
        ))}
      </ul>
    </S.AdminHeaderContainer>
  );
}
