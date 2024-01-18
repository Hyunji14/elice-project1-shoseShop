import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 180px;

  h3 {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 400px;
    height: 48px;
    border: 1px solid;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

export const SignUpButton = styled.input`
  width: 400px;
  height: 48px;
  border: 1px solid;
  border-radius: 10px;
  background: var(--greed-color);
  color: var(--white-color);
  margin-top: 10px;

  &:hover {
    opacity: 0.7;
  }
`;
