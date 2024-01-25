import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 180px;

  h3 {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const UserInfoContextForm = styled.form`
  input {
    padding: 0 10px;
    width: 400px;
    height: 48px;
    border: 1px solid;
    border-radius: 10px;
    margin: 10px 0;
  }

  button {
    width: 400px;
    height: 48px;
    border: 1px solid;
    border-radius: 10px;
  }
`;

export const UserInfoModifyButton = styled.button`
  background: var(--red-color);
  color: var(--white-color);
  margin: 10px 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const UserWithdrawButton = styled.button`
  &:hover {
    color: var(--white-color);
    background: var(--black-color);
  }
`;
