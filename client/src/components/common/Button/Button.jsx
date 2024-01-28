import * as S from './Button.styles';
import { IoCartOutline } from 'react-icons/io5';

export default function Button({ text, color, size, clickHandler }) {
  return (
    <S.ButtonStyle color={color} size={size} onClick={clickHandler}>
      {text && text.includes('카카오') ? (
        <>
          {text.split('카카오').map((part, index, array) => (
            <span key={index}>
              {index < array.length - 1 ? (
                <span>
                  {part}
                  <S.Bold>카카오</S.Bold>
                </span>
              ) : (
                part
              )}
            </span>
          ))}
        </>
      ) : text === '장바구니' ? (
        <IoCartOutline size="30" />
      ) : (
        text
      )}
    </S.ButtonStyle>
  );
}
