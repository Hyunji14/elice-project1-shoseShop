import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Address from '../../components/Address/Address';
import PurchasePrice from '../../components/PurchasePrice/PurchasePrice';
import * as S from './Order.styles';

function Order() {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  const onClickPurchaseButton = () => {
    setIsModal(true);
  };

  const onClickCancelButton = () => {
    navigate(-1);
  };

  return (
    <>
      <S.Container>
        <Title text='주문하기' />
        <S.Wrap>
          <S.LeftContainer>
            <S.Wrap>
              <h3>배송지 정보</h3>
              <label htmlFor='mypageAddress'>
                내 정보 불러오기
                <input type='checkbox' id='mypageAddress' />
              </label>
            </S.Wrap>
            <hr />
            <Address />
          </S.LeftContainer>
          <S.RightContainer>
            <PurchasePrice />
            <Button
              size='large'
              text='구매하기'
              color='primary'
              clickHandler={onClickPurchaseButton}
            />
            <Button
              size='large'
              text='취소하기'
              color='white'
              clickHandler={onClickCancelButton}
            />
          </S.RightContainer>
        </S.Wrap>
      </S.Container>
      {isModal ? (
        <Modal
          isModal={isModal}
          setIsModal={setIsModal}
          text='주문이 완료되었습니다.'
        />
      ) : null}
    </>
  );
}

export default Order;
