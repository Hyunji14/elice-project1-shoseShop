import * as S from './Title.styles';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Title({ text, isAdmin, product }) {
  const navigate = useNavigate();

  const navigateToAddProduct = () => {
    navigate('/admin/addproduct');
  };

  return (
    <S.Container isAdmin={isAdmin}>
      <h2>{text}</h2>
      {product && (
        <Button
          size="thinMedium"
          color="secondary"
          text="상품 추가"
          clickHandler={navigateToAddProduct}
        />
      )}
    </S.Container>
  );
}
