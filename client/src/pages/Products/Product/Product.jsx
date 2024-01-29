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
    <S.Container>
      {products.map((product) => (
        <Link to={`/products/${product._id}`} key={product._id}>
          <li>
            <div>
              <img
                src={
                  product.main_images[0]?.url ??
                  process.env.PUBLIC_URL + `/images/기본제품이미지.jpg`
                }
                alt="제품이미지"
              />
            </div>
            <p>{product.brand}</p>
            <p>
              {product.title} / {product.model_number}
            </p>
            <p>{new Intl.NumberFormat().format(product.price)}</p>
          </li>
        </Link>
      ))}
    </S.Container>
  );
}

export default Product;
