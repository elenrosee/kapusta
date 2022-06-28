import { Breakpoints, Container, MQ } from 'common';
import styled from 'styled-components';

export const HomeViewContainer = styled(Container)`
  padding-top: 30px;

  ${MQ(Breakpoints.md)} {
    padding-top: 40px;
  }
`;

export const PageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 58px;

  ${MQ(Breakpoints.lg)} {
    margin-bottom: 10px;
  }
`;
