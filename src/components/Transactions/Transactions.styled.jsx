import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const TransactionsContainer = styled.div`
  background-color: var(--bg-text-color);
  border-radius: 0 22px 22px 22px;
  padding: 28px 30px 48px;

  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  ${MQ(Breakpoints.lg)} {
    padding: 33px 20px 61px;
  }
`;
