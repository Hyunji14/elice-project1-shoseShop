import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;
`;

export const Box = styled.div`
  width: 600px;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  color: ${(props) => props.theme.color.darkgray};
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 4px;
`;

export const AddFile = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditFile = styled(AddFile)`
  align-items: center;
`;

export const Total = styled.p`
  color: ${(props) => props.theme.color.darkgray};
`;
