import { IoClose } from 'react-icons/io5';
import Quantity from '../../../components/Quantity/Quantity';
import * as S from './AddProduct.styles';

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
        <Quantity />
        <p>25,000 원</p>
      </S.Wrap>
    </S.Container>
  );
}
