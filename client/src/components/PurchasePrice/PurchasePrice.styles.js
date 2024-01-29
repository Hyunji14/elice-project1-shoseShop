import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 250px;

  > P {
    font-size: 30px;
    font-weight: 600;
    text-align: left;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 18px;
  }
`;
