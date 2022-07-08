/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CloseButton } from 'common/Modal/Modal.styled';

import {
  FirstText,
  SecondText,
  Arrow,
  Modal,
  TextWrapper,
} from './ModalWelcome.styled';

export const ModalWelcome = ({ setIsOpenModal }) => {
  return (
    <Modal>
      <Arrow />
      <TextWrapper>
        <CloseButton type="button" onClick={() => setIsOpenModal(false)} />
        <FirstText>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </FirstText>
        <SecondText>
          Ты не можешь тратить деньги пока их у тебя нет : &#41;
        </SecondText>
      </TextWrapper>
    </Modal>
  );
};
