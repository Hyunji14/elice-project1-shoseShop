import { Link } from 'react-router-dom';
import * as S from './Product.styles';

const products = [
  {
    _id: '1asd',
    image: 'nike1.jpg',
    brand: 'NIKE',
    title: 'Air Max 90',
    model_number: '123ABC',
    price: '10000',
  },
  {
    _id: '2asd',
    image: 'nike2.jpg',
    brand: 'ADIDAS',
    title: 'Ultra Boost',
    model_number: '456DEF',
    price: '10000',
  },
  {
    _id: '3asd',
    image: 'nike3.jpg',
    brand: 'PUMA',
    title: 'Cali',
    model_number: '789GHI',
    price: '10000',
  },
  {
    _id: '4asd',
    image: 'nike4.jpg',
    brand: 'VANS',
    title: 'Old Skool',
    model_number: '101JKL',
    price: '10000',
  },
  {
    _id: '5asd',
    image: 'nike4.jpg',
    brand: 'VANS',
    title: 'Old Skool',
    model_number: '101JKL',
    price: '10000',
  },
  {
    _id: '6asd',
    image: 'nike4.jpg',
    brand: 'VANS',
    title: 'Old Skool',
    model_number: '101JKL',
    price: '10000',
  },
  {
    _id: '7asd',
    image: 'nike4.jpg',
    brand: 'VANS',
    title: 'Old Skool',
    model_number: '101JKL',
    price: '10000',
  },
  {
    _id: '8asd',
    image: 'nike4.jpg',
    brand: 'VANS',
    title: 'Old Skool',
    model_number: '101JKL',
    price: '10000',
  },
];

export default function Product({
  // products,
  // loading,
  // brands,
  // productStyle,
  // productStyle2,
  count,
}) {
  // if (loading) {
  //   return <h2>제품을 불러오는 중</h2>;
  // }

  // const getBrandName = (brandId) => {
  //   return brands
  //     .filter((brand) => brand._id === brandId)
  //     .map((brand) => brand.name);
  // };

  return (
    <S.Container>
      {products
        .map((product) => (
          <li key={product._id}>
            <Link to={`/detail/${product._id}`}>
              <div>
                <img />
              </div>
              <p>{product.brand}</p>
              <p>
                {product.title} / {product.model_number}
              </p>
              <p>{new Intl.NumberFormat().format(product.price)}</p>
            </Link>
          </li>
        ))
        .slice(0, count)}
    </S.Container>
  );
}
