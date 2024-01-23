import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import * as S from './Home.styles';
import visualImage1 from '../../image/visualImage1.jpg';
import { getBrands, getProducts } from '../../api/productsAPI';
import Products from '../../components/Products';
import trendingimage from '../../image/trendingimage.png';
import Top from '../../components/Top/Top';

function Home() {
  let slice = 0;
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
      <ul>
        {/* 이미지 슬라이더 */}
        <li>
          <img src={visualImage1} alt="비주얼 이미지1" />
        </li>
      </ul>
      <Top />
      <S.ContextContainer>
        {/* 베스트 상품 영역 */}
        <S.BestItemsDiv>
          <h2>BEST</h2>
          <Products
            products={products.slice(0, 3)}
            brands={brands}
            productStyle="home-product"
          />
          <br />
          <br />
          <Products
            products={products.slice(3, 6)}
            brands={brands}
            itemClass="home-product-item"
            productStyle="home-product"
          />
        </S.BestItemsDiv>

        {/* Trending */}
        <S.TrendItemsDiv>
          {/* <img src={trendingimage} alt="트렌드이미지" /> */}
          <S.TrendItemsP>Own the Floor</S.TrendItemsP>
          <S.TrendItemsTitleP>
            스튜디오 밖에서도 빛나는 스니커즈
          </S.TrendItemsTitleP>
          <button>구매하기</button>
        </S.TrendItemsDiv>

        <S.NewItemsDiv>
          {/* 신제품 영역 */}
          <h2>NEW</h2>
          <Products
            products={products.slice(6, 9)}
            brands={brands}
            productStyle="home-product"
          />
          <br />
          <br />
          <Products
            products={products.slice(9, 12)}
            brands={brands}
            productStyle="home-product"
          />
        </S.NewItemsDiv>
      </S.ContextContainer>
    </S.Container>
  );
}

export default Home;
