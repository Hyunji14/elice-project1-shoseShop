import { useState, useEffect } from 'react';

import * as S from './Home.styles';
import { getBrands, getProducts } from '../../api/productsAPI';
import Products from '../../components/Products';
import Carousel from '../../components/Home/Carousel/Carousel';
import Product from '../../components/common/Product/Product';
import Top from '../../components/common/Top/Top';
import Title from '../../components/Home/Title/Title';
import Content from '../../components/Home/Content/Content';
import Slide from '../../components/Home/Slide/Slide';

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
        {/* <Products
          products={products.slice(0, 3)}
          brands={brands}
          productStyle="home-product"
        />
        <Products
          products={products.slice(3, 6)}
          brands={brands}
          itemClass="home-product-item"
          productStyle="home-product"
        /> */}
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
