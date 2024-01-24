import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseProductImgage from '../../image/base_product_image.png';

import * as S from './Product.styles';

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // 데이터 상태
  const [data, setData] = useState([]);

  // 데이터 get해오는 useEffect
  useEffect(() => {
    axios
      .get(`/api/products/${id}`)

      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류 발생: ', error);
      });
  }, []);

  const addToCart = () => {
    const getAllCartProducts = () => {
      const allProducts = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('cartProduct_')) {
          const product = JSON.parse(localStorage.getItem(key));
          allProducts.push(product);
        }
      }
      return allProducts;
    };

    const previousStorage = getAllCartProducts();
    const isDuplication = previousStorage.some((item) => item._id === data._id);

    if (!isDuplication) {
      const key = `cartProduct_${data._id}`;
      const cartData = { ...data, count: 1 }; // 상품 데이터에 count 값을 추가
      localStorage.setItem(key, JSON.stringify(cartData));
      alert('장바구니에 상품이 추가되었습니다.');
    } else {
      alert('이미 장바구니에 상품이 있습니다.');
    }
  };

  const imgSrc =
    data.main_images?.length && data.main_images?.[0]
      ? data.main_images?.[0].url
      : baseProductImgage;

  return (
    <S.ProductDetailContainer>
      {/* 상품 정보 */}
      <S.ProductDetailContext>
        <S.ProductImgDiv>
          <img src={imgSrc} />
        </S.ProductImgDiv>

        <S.ProductInfoDiv>
          <p>{data.brand}</p>
          <p>{data.title}</p>
          <p>{`${data.price} 원`}</p>

          <S.ProductSizeSelect>
            <option value='' disabled hidden>
              {/* 사이즈 선택 */}
            </option>
            {/* 해당 데이터의 사이즈를 전부 펼쳐야함 */}
            <option>{data.size}</option>
          </S.ProductSizeSelect>

          <form>
            <S.ProductPurchaseButtonInput
              onClick={() => {
                navigate('/PurchaseCompleted');
              }}
              type='button'
              value='구매하기'
            />

            <S.ProductCartButtonInput
              type='button'
              value='장바구니'
              onClick={addToCart}
            />
          </form>
        </S.ProductInfoDiv>
      </S.ProductDetailContext>
    </S.ProductDetailContainer>
  );
}

export default ProductDetail;
