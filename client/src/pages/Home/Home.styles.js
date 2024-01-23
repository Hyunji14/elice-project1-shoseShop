import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  ul {
    width: 100%;
    overflow: hidden;

    & li img {
      width: 100%;
    }

    div {
      position: relative;
      display: flex;
      justify-content: space-between;
      z-index: 9;
    }
  }
`;

export const ContextContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const BestItemsDiv = styled.div`
  width: 100%;
  height: 1000px;

  h2 {
    font-size: 30px;
    margin: 100px 0 50px;
    text-align: center;
  }
`;

export const TrendItemsDiv = styled.div`
  width: 100%;
  height: 1000px;
  text-align: center;

  h2 {
    margin: 80px 0 50px;
    font-size: 30px;
  }

  img {
    width: 1800px;
  }

  button {
    display: block;
    padding: 15px 40px;
    border: 1px solid;
    color: var(--white-color);
    background: var(--black-color);
    border-radius: 5px;
    margin: 0 auto;
  }

  button:hover {
    color: var(--black-color);
    background: var(--white-color);
  }
`;

export const TrendItemsP = styled.p`
  margin-top: 60px;
`;

export const TrendItemsTitleP = styled.p`
  font-weight: 800;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 70px;
`;

export const NewItemsDiv = styled.div`
  width: 100%;
  height: 1000px;
  margin-top: 300px;

  h2 {
    margin: 80px 0 50px;
    font-size: 30px;
    text-align: center;
  }
`;
