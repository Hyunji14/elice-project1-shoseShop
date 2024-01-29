import { useState, useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { getBrands, getProducts } from '../../api/productsAPI';
import Pagination from '../../components/Pagination';
import Product from './Product/Product';
import CategoryBar from './CategoryBar/CategoryBar';
import * as S from './Products.styles';

function ProductsList() {
  const { listType } = useParams();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [total, setTotal] = useState(1);
  const [selectedSortButton, setSelectedSortButton] = useState('최신순');
  let queryString;

  const handleSortButtonClick = (button) => {
    setSelectedSortButton(button);
  };

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
      <S.ProductsListHeader>
        <h2>상품 목록</h2>
        <p>{total}개의 상품이 있습니다.</p>
      </S.ProductsListHeader>
      <S.SortContain>
        <S.SortButton
          id="최신순"
          onClick={() => handleSortButtonClick('최신순')}
          isSelected={selectedSortButton}
        >
          최신순
        </S.SortButton>
        <S.SortButton
          id="오래된순"
          onClick={() => handleSortButtonClick('오래된순')}
          isSelected={selectedSortButton}
        >
          오래된순
        </S.SortButton>
      </S.SortContain>
      <S.ContentsContainer>
        <CategoryBar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          listType={listType}
          handleCheckboxChange={handleCheckboxChange}
        />
        <Product products={products} loading={loading} brands={brands} />
      </S.ContentsContainer>
      <Pagination setPage={paginate} limit={limit} total={total} page={page} />
    </S.Container>
  );
}

export default ProductsList;
