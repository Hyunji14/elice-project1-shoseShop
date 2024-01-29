import styled from 'styled-components';

// productDetail 스타일

export const Container = styled.div`
  margin: 0 10%;

  hr {
    margin: 30px 0;
  }
`;

export const DetailInformation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 100px;
`;

export const Figure = styled.figure`
  width: 700px;
  height: 600px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextContainer = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:nth-child(2) {
    font-size: 22px;
    margin: 10px 0 20px;
  }

  p:nth-child(3) {
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

export const TotalPrice = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: end;
  gap: 10px;
  align-items: baseline;

  p {
    font-weight: 600;
    vertical-align: middle;
  }

  p:last-child {
    font-size: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailImage = styled.div`
  p {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
  }

  hr {
    margin: 20px 10% 80px;
  }
`;

// productList

export const ProductsListHeader = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 100px;
`;

export const SortContain = styled.div`
  display: flex;
  justify-content: end;
`;

export const SortButton = styled.button`
  color: ${(props) =>
    props.id === props.isSelected
      ? props.theme.color.primary
      : props.theme.color.darkgray};
  font-weight: ${(props) => (props.id === props.isSelected ? '800' : 'normal')};
`;

export const ContentsContainer = styled.div`
  display: flex;
`;
