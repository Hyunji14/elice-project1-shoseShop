import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../../../utils/cookieUtils';
import {
  getUserOrderList,
  deleteOrder,
  getImage,
} from '../../../api/userOrderAPI';
import Title from '../../../components/common/Title/Title';
import Table from '../../../components/common/Table/Table';
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
  const [imgSrc, setImgSrc] = useState('');

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
      <Table title={title} data={orderData} />

      {/* <div className="div__orderList--container">
        <div className="div__orderList--contents">
          {userOrderList.length < 1 ? (
            <div className="div__orderList--order">
              <div>현재 주문한 내역이 없습니다</div>
            </div>
          ) : (
            userOrderList.map((order) => {
              return (
                <div key={order['_id']} className="div__orderList--order">
                  <div className="div__orderList--order-column">
                    <img
                      className="img__orderList-titleImg"
                      src={order.imgUrl}
                    />
                  </div>
                  <div className="div__orderList--order-column">
                    {order['date']}
                  </div>
                  <div className="div__orderList--order-column">
                    {order['total_price']}
                  </div>
                  <div className="div__orderList--order-column">
                    {order['delivery_state']}
                  </div>
                  <div className="div__orderList--order-column">
                    {order['items'].length}
                  </div>
                  <div className="div__orderList--order-column">
                    {order['delivery_state'] === '주문 완료' ? (
                      <Link
                        to={`/address/${order['_id']}?address=${order['address']}&detail=${order['addressDetail']}`}
                      >
                        수정하기
                      </Link>
                    ) : (
                      '수정불가'
                    )}
                  </div>
                  <div className="div__orderList--order-column">
                    {order['delivery_state'] === '주문 완료' ? (
                      <button
                        className="button__orderDelete"
                        value={order['_id']}
                        key={order['_id']}
                        onClick={clickDeleteBtn}
                      >
                        취소하기
                      </button>
                    ) : (
                      '취소불가'
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div> */}
    </S.Container>
  );
}

export default UserOrder;
