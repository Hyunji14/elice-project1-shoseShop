import { useState, useEffect, useRef, useCallback } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './Home.styles';
import visualImage1 from '../../image/visualImage1.jpg';
import visualImage2 from '../../image/visualImage2.jpg';
import visualImage3 from '../../image/visualImage3.jpg';

import { getBrands, getProducts } from '../../api/productsAPI';
import Products from '../../components/Product';
import trendingimage from '../../image/trendingimage.png';
import Top from '../../components/Top/Top';

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerPadding: '0px',
};

const images = [visualImage1, visualImage2, visualImage3];

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

  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <S.Container>
      {/* 이미지 슬라이드 */}
      <S.SlideWrap>
        <S.StyledSlide {...settings} ref={slickRef}>
          {images.map((item, index) => (
            <div key={index}>
              <img src={item} alt={item} />
            </div>
          ))}
        </S.StyledSlide>
        {/* 좌우 버튼 */}
        <S.ButtonWrap>
          <button onClick={previous}>
            <IoChevronBackOutline size={80} opacity={0.4} />
          </button>
          <button onClick={next}>
            <IoChevronForwardOutline size={80} opacity={0.4} />
          </button>
        </S.ButtonWrap>
      </S.SlideWrap>

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
