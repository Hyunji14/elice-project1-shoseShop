import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  h3 {
    padding: 40px 0;
  }
`;

export const Information = styled.div`
  display: flex;
  gap: 10px;
`;

export const Image = styled.div`
  width: 306px;
  height: 306px;
  border: 1px solid;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
