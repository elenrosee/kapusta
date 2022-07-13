import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;

  position: ${({ typeView }) => (typeView === 'HomePage' ? 'absolute' : '')};
  bottom: ${({ typeView }) => (typeView === 'HomePage' ? '0' : '')};

  transform: ${({ typeView }) =>
    typeView === 'HomePage' ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const CabbagesWraper = styled.div`
  display: flex;

  svg {
    :not(:first-child) {
      margin-left: 41px;
    }
    :nth-child(2n + 1) {
      margin-top: 28px;
    }

    :nth-child(4n + 2) {
      transform: rotate(90deg);
    }

    :nth-child(4n + 4) {
      transform: rotate(-90deg);
    }
  }
`;

export const OneCabbage = styled.div`
  margin-left: 136px;

  svg {
    transform: rotate(180deg);
  }
`;
