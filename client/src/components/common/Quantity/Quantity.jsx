import { useState } from 'react';
import * as S from './Quantity.styls';
import { IoRemove, IoAdd } from 'react-icons/io5';

export default function Quantity() {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const increaseCount = () => {
    setCurrentQuantity(currentQuantity + 1);
  };

  const decreaseCount = () => {
    setCurrentQuantity(currentQuantity - 1);
  };

  return (
    <S.Container>
      <S.CountButton onClick={decreaseCount}>
        <IoRemove />
      </S.CountButton>
      <S.CountNumber>{currentQuantity}</S.CountNumber>
      <S.CountButton onClick={increaseCount}>
        <IoAdd />
      </S.CountButton>
    </S.Container>
  );
}
