import * as S from './ImageUpload.styles';
import Button from '../../common/Button/Button';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';

export default function ImageUpload({ text }) {
  return (
    <S.Container>
      <S.AddFile>
        <S.Box>{text}</S.Box>
        <Button size="small" color="white" text="파일추가" />
      </S.AddFile>
      <S.EditFile>
        <S.Box></S.Box>
        <button>
          <IoChevronUp size="20" />
        </button>
        <button>
          <IoChevronDown size="20" />
        </button>
        <button>삭제</button>
      </S.EditFile>
      <S.Total>총 3개의 이미지</S.Total>
    </S.Container>
  );
}
