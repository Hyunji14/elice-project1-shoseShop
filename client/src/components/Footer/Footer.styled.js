import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 240px;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  font-size: 14px;

  button {
    color: ${(props) => props.theme.color.white};
    margin-left: 20px;
  }

  hr {
    margin: 40px 0;
    opacity: 0.8;
  }
`;

export const Wrap = styled.div`
  height: 100%;
  margin: 0 10%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  & > div:first-child {
    display: flex;
  }

  span {
    margin-left: auto;
  }
`;

export const Copyright = styled.div`
  display: flex;
  gap: 10px;
`;
