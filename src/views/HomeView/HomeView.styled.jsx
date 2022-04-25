import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const PageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 58px;

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 10px;
  }
`;
