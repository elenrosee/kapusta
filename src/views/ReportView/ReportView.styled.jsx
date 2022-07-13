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

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MQ(Breakpoints.md)} {
    width: 100%;
    background: var(--bg-text-color);
    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
    border-radius: 20px;
    padding: 20px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color-3);

  padding: 50px 0;
`;
