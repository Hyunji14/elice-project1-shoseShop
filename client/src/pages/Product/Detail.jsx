import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseProductImgage from '../../image/base_product_image.png';

import * as S from './Detail.styles';
import AddProduct from '../../components/Detail/AddProduct/AddProduct';
import SelectOption from '../../components/common/Select/Select';
import Button from '../../components/common/Button/Button';
import Top from '../../components/common/Top/Top';

const sizeOption = [
  { value: '220', label: '220' },
  { value: '225', label: '225' },
  { value: '230', label: '230' },
];

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
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
    <S.Container>
      <Top />
      <S.DetailInformation>
        <S.Figure>
          <S.Image src={imgSrc} />
        </S.Figure>
        <S.TextContainer>
          <div>
            <p>NIKE</p>
            <p>나이키 코드 버로우 로우 2 / AMSKDAL2313</p>
            <p>69,000 원</p>
            <SelectOption
              options={sizeOption}
              size="detailSize"
              placeholder="사이즈를 선택해주세요."
            />
            <AddProduct />
            <hr />
            <S.TotalPrice>
              <p>총 결제금액</p>
              <p>138,000 원</p>
            </S.TotalPrice>
            <S.ButtonContainer>
              <Button color="secondary" size="long" text="구매하기" />
              <Button color="gray" size="mini" text="장바구니" />
            </S.ButtonContainer>
          </div>
        </S.TextContainer>
      </S.DetailInformation>
      <S.DetailImage>
        <p>상품정보</p>
        <hr />
      </S.DetailImage>
    </S.Container>
  );
}

export default Detail;
