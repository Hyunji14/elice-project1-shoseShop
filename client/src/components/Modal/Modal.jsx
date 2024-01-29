import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import * as S from './Modal.styles';

export default function Modal({ isModal, setIsModal, text }) {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // 모달 바깥 클릭시 모달 닫기
  useEffect(() => {
    const closeModal = (e) => {
      if (isModal && modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModal(false);
      }
    };
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isModal]);

  // 스크롤 비활성화
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const onClickNavigateHome = () => {
    navigate('/');
  };

  return (
    <S.ModalOverlay>
      <S.ModalWrap ref={modalRef}>
        <S.ModalMessage>{text}</S.ModalMessage>
        <S.ButtonWrap>
          <Button size="small" color="white" text="주문확인" />
          <Button
            size="small"
            color="white"
            text="메인화면"
            clickHandler={onClickNavigateHome}
          />
        </S.ButtonWrap>
      </S.ModalWrap>
    </S.ModalOverlay>
  );
}
