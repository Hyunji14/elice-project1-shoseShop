import { useState, useEffect } from 'react';

import { getBrands, getProducts } from '../../api/productsAPI';
import Product from '../../components/Product';
import Products from '../../components/Product';
import Top from '../../components/Top/Top';
import Carousel from './Carousel/Carousel';
import Title from './Title/Title';
import Content from './Content/Content';
import Slide from './Slide/Slide';
import * as S from './Home.styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  const getProductList = async () => {
    const data = await getProducts('', 1);
    const products = data.products;

    const brandList = await getBrands();
    setProducts(products);
    setBrands(brandList);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <S.Container>
      <Carousel />
      <Top />
      {/* 상품 */}
      <S.ContentsWrap>
        <Products
          products={products.slice(0, 3)}
          brands={brands}
          productStyle="home-product"
        />
        <Products
          products={products.slice(3, 6)}
          brands={brands}
          itemClass="home-product-item"
          productStyle="home-product"
        />
        <Title title="NEW" />
        <Product count="8" />
        <Content />
        <Title title="MAN" />
        <Product count="4" />
        <Slide />
        <Title title="WOMAN" />
        <Product count="4" />
      </S.ContentsWrap>
    </S.Container>
  );
}

export default Home;
