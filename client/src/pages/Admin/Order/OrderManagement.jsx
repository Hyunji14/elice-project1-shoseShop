import { useEffect, useState } from 'react';
import { getUserOrderList } from '../../../api/userOrderAPI';
import * as S from './OrderManegement.styes';
import Title from '../../../components/common/Title/Title';
import Table from '../../../components/common/Table/Table';

const title = [
  '상품이미지',
  '상품명',
  '사이즈',
  '수량',
  '가격',
  '배송상태',
  '주문취소',
];
const orderData = [
  ['이미지', '나이키', '250', '3', '40000원', '배송중', '주문 취소'],
  ['이미지', '나이키', '250', '3', '40000원', '배송중', '주문 취소'],
];

function OrderManagement() {
  return (
    <S.Container>
      <Title text="주문 관리" isAdmin={true} />
      <S.OrderQuantity>
        <span>3</span>
        <p>개의 주문이 있습니다.</p>
      </S.OrderQuantity>
      <Table title={title} data={orderData} />
    </S.Container>
  );
}

export default OrderManagement;
