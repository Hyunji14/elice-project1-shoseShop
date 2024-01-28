import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  getProducts,
  getBrands,
  deleteProduct,
} from '../../../../api/productsAPI';
import Title from '../../../../components/common/Title/Title';
import Button from '../../../../components/common/Button/Button';
import Table from '../../../../components/common/Table/Table';
import ManageProduct from '../../../../components/ManageProduct';
import Pagination from '../../../../components/Pagination';
import * as S from './ProductManagement.styles';

const title = [
  '상품이미지',
  '상품명',
  '카테고리',
  '가격',
  '사이즈',
  '성별',
  '관리',
];
const productData = [
  ['이미지', '플렉스', '운동화', '2000원', '225, 230', '여성', '수정, 삭제'],
  ['이미지', '플렉스', '운동화', '2000원', '225, 230', '여성', '수정, 삭제'],
];

function ProductManagement() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [typeSubCategories, setTypeSubCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [total, setTotal] = useState(1);

  let queryString;

  useEffect(() => {
    async function getDatas() {
      window.scrollTo(0, 0);
      dataSetting(selectedCategories, page);
    }
    getDatas();
  }, [page]);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  const { state } = useLocation();
  useEffect(() => {
    if (state) setSelectedCategories(state);
  }, [state]);

  const dataSetting = async () => {
    const data = await getProducts(selectedCategories, page);
    const brandList = await getBrands();

    setProducts(data.products);
    setTotal(data.total);
    setBrands(brandList);
  };

  const getProductList = useCallback(async () => {
    const data = await getProducts(selectedCategories, page);
    // const products = data.products;
    const total = data.total;

    const brandList = await getBrands();

    setProducts(data.products);
    setBrands(brandList);
    setTotal(total);
    updateQueryString();
  }, [selectedCategories, page]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const updateQueryString = () => {
    let queryString =
      selectedCategories.length > 0
        ? `?` + selectedCategories.map((it) => `category_id=${it}`).join('&')
        : '';
    if (!queryString) {
      queryString += '?';
    } else {
      queryString += '&';
    }
    queryString += page ? `page=${page}` : 'page=1';
    window.history.pushState({}, '', window.location.pathname + queryString);
  };

  const handleRemove = async (item) => {
    if (
      window.confirm(
        `${item.title}(${item.model_number})제품을 삭제하시겠습니까?`
      )
    ) {
      await deleteProduct(item._id);
      getProductList();
    }
  };

  const handleEdit = (product) => {
    navigate(`/productedit/${product._id}`, {
      state: {
        item: product,
        brands: brands,
        typeSubCategories,
      },
    });
  };

  return (
    <S.Container>
      <Title text="상품 관리" isAdmin={true} product={true} />
      <S.ProductQuantity>
        <span>{total}</span>
        <p>개의 상품이 있습니다.</p>
      </S.ProductQuantity>
      <Table title={title} data={productData} />
    </S.Container>
  );
}

export default ProductManagement;
