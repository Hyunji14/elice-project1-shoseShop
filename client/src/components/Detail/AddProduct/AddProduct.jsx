import * as S from './AddProduct.styles';
import { IoClose, IoRemove, IoAdd } from 'react-icons/io5';

export default function AddProduct() {
  return (
    <S.Container>
      <S.Wrap>
        <p>225</p>
        <button>
          <IoClose size={20} />
        </button>
      </S.Wrap>
      <S.Wrap>
        <S.CountContainer>
          <S.CountButton>
            <IoRemove />
          </S.CountButton>
          <S.CountNumber>1</S.CountNumber>
          <S.CountButton>
            <IoAdd />
          </S.CountButton>
        </S.CountContainer>
        <p>25,000 원</p>
      </S.Wrap>
    </S.Container>
  );
}
