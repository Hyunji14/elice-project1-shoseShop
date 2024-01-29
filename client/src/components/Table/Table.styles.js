import styled from 'styled-components';

export const TableType = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background: ${(props) => props.theme.color.table};
  padding: 12px;
`;

export const TableData = styled.td`
  padding: 30px;
  text-align: center;
`;
