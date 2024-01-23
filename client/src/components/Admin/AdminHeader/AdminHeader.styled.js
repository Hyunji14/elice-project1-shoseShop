import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 200px;
  height: 100vh;
  background: ${(props) => props.theme.color.primary};
`;

export const Navigation = styled.li`
  width: 100%;
  padding: 24px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.theme.color.white};
`;
