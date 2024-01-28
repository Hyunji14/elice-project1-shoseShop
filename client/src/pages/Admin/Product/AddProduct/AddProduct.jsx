import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { addProduct } from '../../../../api/productsAPI';
import { getBigCategory, getChildCategory } from '../../Category/CategoryAPI';
import Title from '../../../../components/common/Title/Title';
import Input from '../../../../components/common/Input/Input';
import Button from '../../../../components/common/Button/Button';
import * as S from './AddProduct.styles';
import SelectOption from '../../../../components/common/Select/Select';
import ImageUpload from '../../../../components/Admin/ImageUpload/ImageUpload';

const genderOption = [
  { value: '모두', label: '모두' },
  { value: '남성', label: '남성' },
  { value: '여성', label: '여성' },
];

function AddProduct() {
  let { state } = useLocation();

  const { categories } = useState();
  const { brands } = useState();
  const { typeSubCategories } = useState();

  //category 가져오기
  let p_id = '';
  const [bigCategory, setBigCategory] = useState([]);
  const [childCategory, setChildCategory] = useState([]);
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getBigCategory().then((response) => {
      setBigCategory(response);
    });
  };

  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleBigCategory = (e) => {
    getChildCategory(e.target.value).then((res) => {
      setParentCategoryId(e.target.value);
      setChildCategory(res);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('mmmm', parentCategoryId);
    if (product.title.length < 5) {
      alert('상품 이름은 5글자 이상 입력하세요');
    }

    const jsonData = {
      title: product.title,
      category_id: [parentCategoryId, categoryId],
      model_number: product.model_number,
      price: product.price,
      gender: product.gender,
      size: product.size,
    };

    const response = await addProduct(jsonData);

    alert('상품이 추가되었습니다.');
    const { _id } = response;
    navigate(`/productedit/${_id}`, {
      state: {
        categories: categories,
        item: response,
        // categories: selectedCategories,
        brands: brands,
        typeSubCategories,
      },
    });
    // navigate(-1);
  };

  return (
    <S.Container>
      <Title text="상품 추가" isAdmin={true} />
      <S.Information>
        <S.Image>
          <img />
        </S.Image>
        <S.Form onSubmit={handleSubmit}>
          <Input
            size="medium"
            placeholder="상품명을 입력해주세요."
            type="text"
            value={product.title}
            onChange={handleInputChange}
          />
          <Input
            size="medium"
            placeholder="모델명을 입력해주세요."
            type="text"
            value={product.model_number}
            onChange={handleInputChange}
          />
          <Input
            size="medium"
            placeholder="브랜드를 입력해주세요."
            type="text"
          />
          <Input
            size="medium"
            placeholder="가격을 입력해주세요."
            type="text"
            value={product.price}
            onChange={handleInputChange}
          />
          <SelectOption
            options={genderOption}
            size="productGender"
            placeholder="성별을 선택해주세요."
            value={product.gender}
            onChange={handleInputChange}
          />
          <Input
            size="medium"
            placeholder="사이즈를 입력해주세요."
            type="text"
            value={product.size}
            onChange={handleInputChange}
          />
          <S.ButtonContainer>
            <Button
              size="medium"
              color="white"
              text="취소하기"
              clickHandler={() => navigate(-1)}
            />
            <Button
              size="medium"
              color="primary"
              text="등록하기"
              type="submit"
            />
          </S.ButtonContainer>
        </S.Form>
      </S.Information>

      {/* <label htmlFor="type" className="form__label--input-title-hidden">
                대분류:
              </label>
              <select
                id="type"
                onChange={handleBigCategory}
                className="form__input--input-value-style form__input--input-value-style-type"
              >
                <option>대분류를 선택하세요.</option>

                {bigCategory.map((item) => (
                  <option value={item['_id']} key={item['_id']}>
                    {item['name']}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="brand"
                className="form__label--input-title-hidden"
              >
                소분류를 선택하세요
              </label>
              <select
                id="brand"
                name="brand"
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
                className="form__input--input-value-style form__input--input-value-style-brand"
              >
                <option>소분류를 선택하세요.</option>

                {childCategory.map((item) => (
                  <option value={item['_id']} key={item['_id']}>
                    {item['name']}
                  </option>
                ))}
              </select> */}

      <h3>이미지 업로드</h3>
      <ImageUpload text="메인이미지" />
      <ImageUpload text="상세이미지" />
    </S.Container>
  );
}

export default AddProduct;
