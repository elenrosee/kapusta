import { Button } from 'common';
import styled from 'styled-components';

export const BalanceForm = styled.div`
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BalanceText = styled.p`
  margin-bottom: 6px;
  color: var(--text-color-2);
  font-weight: 400;
  text-transform: uppercase;
`;

export const BalanceInput = styled.input`
  width: 125px;
  height: 44px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: transparent;

  color: var(--text-color);
  border: 2px solid var(--bg-text-color);
  border-right: none;
  border-radius: 22px 0 0 22px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: var(--text-color);
  }
  &:focus::placeholder {
    color: transparent;
    transition: text-indent 0.3s ease;
  }
`;

export const BalanceButton = styled(Button)`
  padding-right: 5px;
  font-weight: 400;
  color: var(--text-color-2);
  border: 2px solid var(--bg-text-color);
  border-radius: 0px 22px 22px 0px;
`;
