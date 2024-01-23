import * as HeaderStyle from './AdminHeader.styled';

const menu = ['카테고리 관리', '상품 관리', '주문 관리', '유저 관리'];

export default function AdminHeader() {
  return (
    <HeaderStyle.HeaderContainer>
      <ul>
        {menu.map((item, index) => (
          <HeaderStyle.Navigation key={index}>{item}</HeaderStyle.Navigation>
        ))}
      </ul>
    </HeaderStyle.HeaderContainer>
  );
}
