import styled from 'styled-components';

export const Container = styled.div`
  height: ${(props) => (props.isAdmin ? '60px' : '200px')};
  margin-top: ${(props) => (props.isAdmin ? '100px' : '0')};
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
`;
