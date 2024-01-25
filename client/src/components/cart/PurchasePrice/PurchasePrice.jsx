import * as S from './PurchasePrice.styles';

export default function PurchasePrice() {
  return (
    <S.Container>
      <p>결제금액</p>
      <S.FlexWrap>
        <p>총 상품금액</p>
        <p>0원</p>
      </S.FlexWrap>
      <S.FlexWrap>
        <p>배송비</p>
        <p>0원</p>
      </S.FlexWrap>
      <S.FlexWrap>
        <p>총 결제금액</p>
        <p>0원</p>
      </S.FlexWrap>
    </S.Container>
  );
}
