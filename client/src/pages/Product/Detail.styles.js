import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  hr {
    margin: 30px 0;
  }
`;

export const DetailInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 10%;
`;

export const Figure = styled.figure`
  width: 55%;
  height: 55%;
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
