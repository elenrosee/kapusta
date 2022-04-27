import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const TrTable = styled.table`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  height: 384px;
  width: 100%;

  ${MQ(Breakpoints.lg)} {
    display: inline-flex;
    width: 760px;
  }

  th {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
  }
`;

export const TrTableHead = styled.thead``;

export const TrTableHeadRow = styled.tr`
  display: flex;
  align-items: center;
  color: var(--text-color);
  text-transform: uppercase;
  border-radius: 20px 20px 0 0;
  background-color: var(--bg-color);

  th:nth-child(1) {
    width: 20%;
  }

  th:nth-child(2) {
    display: flex;
    justify-content: flex-start;
    width: 30%;
  }
  th:nth-child(3) {
    width: 20%;
  }
  th:nth-child(4) {
    width: 30%;
  }
`;

export const TrTableBody = styled.tbody`
  flex-grow: 3;
  overflow: scroll;

  border-left: 2px solid var(--bg-color);
  border-right: 2px solid var(--bg-color);
  border-bottom: 2px solid var(--bg-color);
`;

export const TrTableRow = styled.tr`
  display: flex;
  color: var(--text-color-3);

  border-bottom: 2px solid var(--bg-color);

  &:last-child {
    border-bottom: none;
  }

  th:nth-child(1) {
    width: 20%;
    font-weight: 400;
  }

  th:nth-child(2) {
    display: flex;
    justify-content: flex-start;
    width: 30%;
    font-weight: 400;
  }
  th:nth-child(3) {
    width: 20%;
    font-weight: 400;
  }
  th:nth-child(4) {
    display: flex;
    justify-content: flex-end;
    width: 20%;
  }
  th:nth-child(5) {
    width: 10%;
  }
`;

export const Sum = styled.th`
  font-weight: 700;
  color: ${({ type }) =>
    type === 'costs' ? 'rgba(231, 25, 46, 1)' : 'rgba(64, 121, 70, 1)'};
`;
