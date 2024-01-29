import styled from 'styled-components';

export const AdminHeaderContainer = styled.header`
  width: 200px;
  height: 100vh;
  background: ${(props) => props.theme.color.primary};
  display: flex;
  flex-direction: column;

  img {
    width: 130px;
    padding: 100px 0 30px;
    margin: 0 auto;
    cursor: pointer;
  }
`;

export const AdminNavigation = styled.li`
  width: 100%;
  padding: 24px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? props.theme.color.primary : props.theme.color.white};
  background: ${(props) =>
    props.isSelected ? props.theme.color.white : props.theme.color.primary};
`;
