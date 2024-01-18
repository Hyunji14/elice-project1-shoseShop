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

export const LoginForm = styled.form`
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

export const LoginButton = styled.input`
  width: 400px;
  height: 48px;
  border-radius: 10px;
  color: var(--white-color);
  background: var(--red-color);
  margin: 30px 0 10px 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const SignUpButton = styled.button`
  width: 400px;
  height: 48px;
  border: 1px solid;
  border-radius: 10px;
  background: none;
  display: block;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    color: var(--white-color);
    background: var(--black-color);
  }
`;
