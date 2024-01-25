import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    margin-bottom: 20px;
  }

  div {
    width: 300px;
    height: 300px;
    border: 1px solid;
  }

  p:first-of-type {
    margin-top: 16px;
    font-weight: 600;
  }

  p:nth-of-type(2) {
    margin-bottom: 18px;
  }

  p:last-of-type {
    font-size: 20px;
    font-weight: 700;
  }
`;
