import * as S from "./Footer.styled";

const menu = [
  "이용약관",
  "개인정보처리방침",
  "위치기반 서비스약관",
  "영상정보처리기기 운영방침",
];

export default function Footer() {
  return (
    <S.Container>
      <S.Wrap>
        <div>
          <p> © 2023 Elice SW 7, 9 team In morning Inc. All Rights Reserved</p>
          <span>
            {menu.map((item, index) => (
              <button key={index}>{item}</button>
            ))}
          </span>
        </div>
        <hr />
        <div>
          <p>
            상호명 : (주)아침엔 | 대표자명 : 김진주 | 사업자등록번호 :
            123-45-67890 | 사업장 주소 : 서울 엘리스 성수낙낙 | 대표전화 :
            1234-5678
          </p>
          <p>
            특정 브랜드의 상품에 있어 폴더는 통신판매중개자이며, 통신판매의
            당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은
            판매자에게 있습니다.
          </p>
        </div>
      </S.Wrap>
    </S.Container>
  );
}
