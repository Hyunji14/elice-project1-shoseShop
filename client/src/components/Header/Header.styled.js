import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 40px;
`;

export const HeaderWrap = styled.div`
  height: 100%;
  margin: 0 10%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  width: 100px;
  display: flex;
  align-items: center;
  margin-right: 30px;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 20px;
  &:hover {
    opacity: 0.8;
  }

  li {
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid;
      opacity: 80%;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const Search = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 0;
  }
`;

export const Input = styled.input`
  width: 180px;
  height: 20px;
  border-bottom: 1px solid;
  padding: 0 20px 0 2px;
`;
