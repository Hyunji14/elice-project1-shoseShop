import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  getCategory,
  getBigCategory,
  postCategory,
  deleteCategory,
  updateCategory,
  getCategoryById,
} from './CategoryAPI';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button';
import Table from '../../../components/Table/Table';
import * as S from './Category.styles';

const title = ['순서', '카테고리명', '분류', '관리'];
const tableData = [
  ['위 아래', 'BRAND', '대분류', '수정 삭제'],
  ['위 아래', 'NIKE', '소분류', '수정 삭제'],
];

function Category() {
  const navigate = useNavigate();
  // 데이터 가져오기 변수
  const [bigCategory, setBigCategory] = useState([]);

  // 데이터 보내기 변수
  const [categoryName, setCategoryName] = useState('');
  const [categoryType, setCategoryType] = useState('default');
  const [parentCategory, setParentCategory] = useState('-1');

  // 대분류 목록 get
  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getBigCategory().then((response) => {
      setBigCategory(response);
    });
  };

  // 카테고리 삭제 delete
  const deleteData = async (e) => {
    const deleteId = {
      _id: e.target.parentElement.id,
    };
    getCategory();

    await deleteCategory(deleteId);
    refresh();
  };

  const [editMode, setEditMode] = useState(false);
  const [categoryId, setCategoryId] = useState('');

  // 카테고리 수정 update

  const setInputValue = (e) => {
    setEditMode(true);
    const data = getCategoryById(e.target.id).then((res) => {
      setCategoryId(e.target.id);
      setCategoryName(res.name);
      setCategoryType(res.categoryType);
      setParentCategory(res.parentCategory);
    });
  };
  const updateData = async () => {
    const updateItem = {
      id: categoryId,
      name: categoryName,
      parentCategory,
      categoryType,
    };
    await updateCategory(updateItem);
    alert('업데이트 성공!');
    resetData();
    setEditMode(false);
  };

  const resetData = () => {
    setCategoryName('');
    setCategoryType('');
    setParentCategory('');
  };

  // 카테고리 추가 post
  const createNewData = async (e) => {
    const newCategory = {
      name: categoryName,
      parentCategory: parentCategory,
      categoryType: categoryType,
    };
    await postCategory(newCategory);
  };

  const cancleBtn = () => {
    if (window.confirm('작업을 취소하시겠습니까?')) {
      if (!editMode) {
        resetData();
        alert('상품 페이지로 이동합니다.');
        navigate('/manageproducts');
      } else {
        resetData();
      }
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <S.Container>
      <Title text="카테고리 관리" isAdmin={true} />
      <S.SubTitle>카테고리 등록</S.SubTitle>
      <S.CategoryButtons>
        <Button text="대분류 추가" color="gray" size="thinMedium" />
        <Button text="소분류 추가" color="gray" size="thinMedium" />
      </S.CategoryButtons>
      <S.SubTitle>카테고리 리스트</S.SubTitle>
      <Table title={title} data={tableData} />
    </S.Container>
  );
}

export default Category;
