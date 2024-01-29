import * as S from './Title.styles';
import { AiOutlineSwapRight } from 'react-icons/ai';

export default function Title({ title, link }) {
  return (
    <S.Container>
      <h2>{title}</h2>
      <button>
        <p>VIEW MORE</p>
        <AiOutlineSwapRight />
      </button>
    </S.Container>
  );
}
