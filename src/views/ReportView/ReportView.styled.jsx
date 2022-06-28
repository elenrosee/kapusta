import { Breakpoints, Container, MQ } from 'common';
import styled from 'styled-components';

export const ReportViewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 15px;
  padding-bottom: 50px;

  ${MQ(Breakpoints.md)} {
    padding-top: 40px;
    padding-bottom: 125px;
  }

  ${MQ(Breakpoints.lg)} {
    padding-bottom: 75px;
  }
`;

export const MonthAndBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MQ(Breakpoints.md)} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    margin-bottom: 30px;
  }
`;
