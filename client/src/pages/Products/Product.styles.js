import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 150px;
  margin-bottom: 200px;
`;

export const ProductsHeaderDiv = styled.div`
  text-align: center;

  h4 {
    margin: 30px 0;
  }
`;

export const ProductsContentsDiv = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

export const ProductsListDiv = styled.div`
  width: 80%;
  margin-left: auto;
  margin-bottom: 100px;
`;

export const ProductsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;

  li {
    width: 100%;
  }

  li div {
    margin-top: 10px;
  }
`;

export const ProductLiImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const ProductBrandDiv = styled.div`
  font-weight: 600;
`;

export const ProductPriceDiv = styled.div`
  font-size: 20px;
`;

export const ProductDetailContainer = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 100px;
`;

export const ProductDetailContext = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
`;

export const ProductImgDiv = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid;

  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
`;

export const ProductInfoDiv = styled.div`
  margin: 30px 0 0 20px;

  p:first-child {
    font-size: 20px;
    font-weight: 500;
  }

  p:nth-child(2) {
    font-size: 30px;
  }

  p:nth-child(3) {
    font-size: 25px;
  }
`;

export const ProductSizeSelect = styled.select`
  width: 300px;
  height: 48px;
`;

export const ProductPurchaseButtonInput = styled.input`
  width: 300px;
  height: 48px;
  display: block;
  border-radius: 10px;
  color: var(--white-color);
  background: var(--red-color);
  margin: 150px 0 10px 0;
`;

export const ProductCartButtonInput = styled.input`
  width: 300px;
  height: 48px;
  border-radius: 10px;
  color: var(--white-color);
  background: var(--greed-color);
`;
