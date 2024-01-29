import styled, { css } from 'styled-components';

const countStyle = css`
  width: 30px;
  height: 30px;
  background: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.lightgray};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CountButton = styled.button`
  ${countStyle}
`;

export const CountNumber = styled.div`
  ${countStyle}
`;
