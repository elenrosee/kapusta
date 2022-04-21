import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  Container,
  CloseButton,
  Title,
  ButtonBox,
} from './Modal.styled';
import { Button } from 'common/Styles';

const modalRoot = document.querySelector('#modal');

export const Modal = ({ onClose, onAgree, title }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container>
        <CloseButton type="button" onClick={() => onClose()} />
        <Title>{title}</Title>
        <ButtonBox>
          <Button
            type="button"
            onClick={async () => (await onAgree(), onClose())}
          >
            Да
          </Button>
          <Button type="button" onClick={() => onClose()}>
            Нет
          </Button>
        </ButtonBox>
      </Container>
    </Backdrop>,
    modalRoot
  );
};
