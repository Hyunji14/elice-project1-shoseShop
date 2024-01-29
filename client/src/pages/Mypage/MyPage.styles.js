import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;
  height: 100vh;
  text-align: center;
  margin-top: 90px;

  h3 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 45px;
  }
`;

export const MyPageHeaderButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px;

  a {
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    border: 1px solid black;
    text-align: center;
    margin: 0 5px;
  }

  a:hover {
    border: 1px solid rgb(239, 98, 83);
    color: rgb(239, 98, 83);
  }
`;

export const MyPageContextDiv = styled.div`
  width: 100%;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow: auto;
`;

export const OrderListHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 5px;
  height: 30px;

  div {
    font-size: 20px;
    justify-content: center;
    font-weight: 400;
    width: 12%;
    text-align: center;
  }
`;

export const OrderListContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OrderRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  width: 96%;
  padding: 25px 5px;
`;

export const OrderProductImg = styled.img`
  height: 165px;
  width: 165px;
`;

export const OrderColumnDiv = styled.div`
  font-weight: 400;
  width: 12%;
  text-align: center;
`;

export const OrderDeleteButton = styled.button`
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  text-align: center;
  color: red;
`;
