import { useState, useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import * as S from './Product.styles';
import Product from './Product';
import { getBrands, getProducts } from '../../api/productsAPI';
import CategoryBar from '../../components/CategoryBar';
import Pagination from '../../components/Pagination';
import '../../css/btn.css';

function Products() {
  const { listType } = useParams();

  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [total, setTotal] = useState(1);
  let queryString;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const { state } = useLocation();
  useEffect(() => {
    if (state) setSelectedCategories(state);
  }, [state]);

  const getProductList = useCallback(async () => {
    const data = await getProducts(selectedCategories, page);
    const products = data.products;
    const total = data.total;

    const brandList = await getBrands();
    setProducts(products);
    setBrands(brandList);
    setTotal(total);
    updateQueryString();
  }, [selectedCategories, page]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

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

  const paginate = (pageNumber) => setPage(pageNumber);
  return (
    <S.Container>
      <S.ProductsHeaderDiv>
        <h2>상품 목록</h2>
        <div>{listType}페이지 입니다</div>
        <h4>{total}개의 상품이 있습니다</h4>
      </S.ProductsHeaderDiv>

      <S.ProductsContentsDiv>
        <CategoryBar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          listType={listType}
          handleCheckboxChange={handleCheckboxChange}
        />

        <S.ProductsListDiv>
          <Product products={products} loading={loading} brands={brands} />
        </S.ProductsListDiv>
      </S.ProductsContentsDiv>
      <Pagination setPage={paginate} limit={limit} total={total} page={page} />
    </S.Container>
  );
}

export default Products;
