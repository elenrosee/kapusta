import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const SummaryList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  border-radius: 20px 20px 20px 0;
  background-color: var(--bg-color);

  width: 230px;

  ${MQ(Breakpoints.md)} {
    margin-left: 30px;
    margin-top: 30px;
  }

  ${MQ(Breakpoints.lg)} {
    margin-top: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 22px;
    padding-right: 22px;

    height: 40px;
    border-bottom: 2px solid var(--bg-text-color);
    text-transform: uppercase;

    &:first-child {
      color: var(--text-color);
      font-weight: 700;
      justify-content: center;
      height: 38px;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;
