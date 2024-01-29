import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.color.white};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Wrap = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
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

  li {
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.color.white};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.color.gray};
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
  cursor: text;
`;
