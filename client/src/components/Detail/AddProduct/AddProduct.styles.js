import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 130px;
  background: ${(props) => props.theme.color.lightgray};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const countStyle = css`
  width: 30px;
  height: 30px;
  background: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.lightgray};
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
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

export const CountButton = styled.button`
  ${countStyle}
`;

export const CountNumber = styled.div`
  ${countStyle}
`;
