import { useEffect, useState } from 'react';
import { getUserOrderList, deleteOrder } from './UserOrder/UserOrderAPI';
import { getCookie } from '../../utils/cookieUtils';
import { Link } from 'react-router-dom';

import * as S from './MyPage.styles';
import { PATH } from '../../global/constants';

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
      <S.MyPageHeaderButtonDiv>
        <Link to={PATH.userInfo}>회원정보 수정</Link>
        <Link to={PATH.userOrder}>주문 내역</Link>
      </S.MyPageHeaderButtonDiv>

      <h3>주문 내역</h3>

      <S.MyPageContextDiv>
        <S.OrderListHeaderDiv>
          <div>상품 이미지</div>
          <div>주문 일자</div>
          <div>가격</div>
          <div>상태</div>
          <div>상품 총 개수</div>
          <div>주소 수정</div>
          <div>주문 취소</div>
        </S.OrderListHeaderDiv>

        <S.OrderListContentsDiv>
          {userOrderList.length < 1 ? (
            <S.OrderRowDiv>
              <div>현재 주문한 내역이 없습니다</div>
            </S.OrderRowDiv>
          ) : (
            userOrderList.map((order) => {
              return (
                <S.OrderRowDiv key={order['_id']}>
                  <S.OrderColumnDiv>
                    <S.OrderProductImg src={order.imgUrl} />
                  </S.OrderColumnDiv>
                  <S.OrderColumnDiv>{order['date']}</S.OrderColumnDiv>
                  <S.OrderColumnDiv>{order['total_price']}</S.OrderColumnDiv>
                  <S.OrderColumnDiv>{order['delivery_state']}</S.OrderColumnDiv>
                  <S.OrderColumnDiv>{order['items'].length}</S.OrderColumnDiv>
                  <S.OrderColumnDiv>
                    {order['delivery_state'] === '주문 완료' ? (
                      <Link
                        to={`/address/${order['_id']}?address=${order['address']}&detail=${order['addressDetail']}`}
                      >
                        수정하기
                      </Link>
                    ) : (
                      '수정불가'
                    )}
                  </S.OrderColumnDiv>
                  <S.OrderColumnDiv>
                    {order['delivery_state'] === '주문 완료' ? (
                      <S.OrderDeleteButton
                        value={order['_id']}
                        key={order['_id']}
                        onClick={clickDeleteBtn}
                      >
                        취소하기
                      </S.OrderDeleteButton>
                    ) : (
                      '취소불가'
                    )}
                  </S.OrderColumnDiv>
                </S.OrderRowDiv>
              );
            })
          )}
        </S.OrderListContentsDiv>
      </S.MyPageContextDiv>
    </S.Container>
  );
}

export default UserOrder;
