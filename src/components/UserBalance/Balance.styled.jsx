import { Breakpoints, Button, MQ } from 'common';
import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  position: relative;
`;

export const BalanceForm = styled.div`
  margin-bottom: 30px;

  display: flex;

  flex-direction: column;
  align-items: center;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 0;
    flex-direction: row;
  }
`;

export const BalanceText = styled.p`
  margin-bottom: 6px;
  color: var(--text-color-2);
  font-weight: 500;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 0;
    margin-left: 40px;
    margin-right: 20px;
  }

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 0;
    margin-left: 340px;
  }
`;

export const BalanceInput = styled.input`
  width: ${({ typeView }) => (typeView !== 'report' ? '125px' : '183px')};
  height: 44px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: transparent;

  color: var(--text-color);
  border: 2px solid var(--bg-text-color);
  border-right: ${({ typeView }) => typeView !== 'report' && 'none'};
  border-radius: ${({ typeView }) =>
    typeView !== 'report' ? '22px 0 0 22px' : '22px'};
  text-align: center;
  outline: none;

  ${MQ(Breakpoints.md)} {
    width: 125px;
    border-right: 2px solid var(--bg-text-color);
    border-radius: 16px;

    margin-right: 15px;
  }

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

  ${MQ(Breakpoints.md)} {
    border-radius: 16px;
  }
`;
