import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;

  tbody {
    width: 100%;
  }

  tr {
    width: 100%;
    height: 140px;
  }

  td:first-of-type {
    width: 5%;
  }

  td:nth-of-type(2) {
    width: 25%;
  }

  td:nth-of-type(3) {
    width: 35%;
  }

  td:nth-of-type(4) {
    width: 15%;
  }

  td:nth-of-type(5) {
    width: 15%;
  }
  /* 
  td:last-of-type {
    width: 5%;
  } */
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid;
`;
