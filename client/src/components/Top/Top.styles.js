import styled from 'styled-components';

export const Container = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2%;
  bottom: 2%;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;
