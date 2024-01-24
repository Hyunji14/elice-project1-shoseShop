import { Link } from 'react-router-dom';
import * as S from './Product.styles';

function Product({ products, loading, brands }) {
  if (loading) {
    return <h2>제품을 불러오는 중</h2>;
  }

  const getBrandName = (brandId) => {
    return brands
      .filter((brand) => brand._id === brandId)
      .map((brand) => brand.name);
  };

  return (
    <>
      <S.ProductsUl>
        {products.map((product) => (
          <Link to={`/products/${product._id}`}>
            <li key={product._id}>
              <S.ProductLiImg
                src={
                  product.main_images[0]?.url ??
                  process.env.PUBLIC_URL + `/images/기본제품이미지.jpg`
                }
              />
              <S.ProductBrandDiv>
                브랜드:{getBrandName(product.brand)}
              </S.ProductBrandDiv>
              <div>
                {product.title} / {product.model_number}
              </div>
              <S.ProductPriceDiv>
                {new Intl.NumberFormat().format(product.price)} 원
              </S.ProductPriceDiv>{' '}
            </li>
          </Link>
        ))}
      </S.ProductsUl>
    </>
  );
}

export default Product;
