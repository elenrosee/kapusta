import styled from 'styled-components';

export const Wraper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 135px;
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
`;

export const CurrentMonth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Month = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: var(--text-color);
  text-transform: uppercase;
`;

export const BtnLeft = styled.button`
  background-color: transparent;
  border: none;
`;

export const ArrowIcon = styled.img`
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  height: 12px;

  &:hover {
    height: 12px;
  }
`;

export const BtnRight = styled(BtnLeft)``;
