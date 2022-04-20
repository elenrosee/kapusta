import styled from 'styled-components';
import close from 'images/close.svg';

export const Backdrop = styled.div`
  z-index: 10;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-width: 380px;
  min-height: 194px;
  border-radius: 30px;
  background-color: var(--bg-text-color);
  box-shadow: 10px 10px 30px var(--text-color-1);
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 20px;
  right: 20px;
  border: none;
  background-color: inherit;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 0.1s ease-out;
`;

export const Title = styled.h2`
  padding: 0 0 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: var(--text-color-3);
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
