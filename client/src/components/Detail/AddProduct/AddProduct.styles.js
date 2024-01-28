import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 130px;
  background: ${(props) => props.theme.color.lightgray};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrap = styled.div`
  height: 50px;
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:first-child {
    font-size: 18px;
  }

  p:last-child {
    font-size: 20px;
    font-weight: 700;
  }
`;
