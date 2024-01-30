import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 80%;

  hr {
    margin: 10px 0;
  }
`;

export const RightContainer = styled.div`
  padding-top: 46px;
  width: 19%;
  width: 100%;
  height: 800px;
  text-align: center;
  margin-top: 180px;

  h3 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

export const ContextDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const SelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const SelectCheckboxContainer = styled.label`
  position: relative;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin-right: 10px;

  & span i {
    position: absolute;
    top: 8px;
    left: 10px;
  }
`;

export const CheckBoxInput = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c2c2c2;
  cursor: pointer;

  &:checked {
    background-color: #41b979;
  }
`;
