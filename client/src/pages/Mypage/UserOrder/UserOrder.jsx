import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getUserOrderList, deleteOrder } from './UserOrderAPI.js';
import { PATH } from '../../../global/constants.js';
import { getCookie } from '../../../utils/cookieUtils';
import Title from '../../../components/Title/Title';
import Table from '../../../components/Table/Table';
import * as S from './UserOrder.styles';

const title = [
  '상품이미지',
  '주문일자',
  '가격',
  '상태',
  '개수',
  '주문정보수정',
  '주문 취소',
];

const orderData = [
  ['이미지', '2023-12-12', '2000원', '배송준비중', '3', '수정하기', '취소하기'],
];

function UserOrder() {
  const [userOrderList, setUserOrderList] = useState([]);
  const [user_id, setUserId] = useState(getCookie('user_id'));

  const getOrderList = async () => {
    //TODO: 로그인 이후에 id 값 가져오기
    await getUserOrderList(user_id).then((data) => {
      setUserOrderList(data);
    });
  };

  useEffect(() => {
    getOrderList();
  }, []);

  const clickDeleteBtn = (e) => {
    if (window.confirm('주문을 취소하시겠습니까?')) {
      deleteOrder(e.target.value);
      alert('삭제되었습니다.');
      getOrderList();
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <S.Container>
      <Title text="주문 내역" />
      <Table title={Title} />
    </S.Container>
  );
}

export default UserOrder;
