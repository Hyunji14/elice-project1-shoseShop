import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

export const ModalWrap = styled.div`
  width: 360px;
  max-width: 480px;
  height: 200px;
  background: ${(props) => props.theme.color.white};
  border-radius: 6px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
`;

export const ButtonWrap = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;
