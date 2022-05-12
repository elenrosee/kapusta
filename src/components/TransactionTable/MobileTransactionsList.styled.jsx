import styled from 'styled-components';
import trashBin from 'images/trashBin.svg';

export const TransactionsList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  flex-grow: 3;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;

  overflow: scroll;
`;

export const Transaction = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  padding-top: 10px;
  padding-bottom: 10px;

  border-bottom: 1px solid var(--bg-color);
`;

export const Text = styled.div``;

export const Description = styled.span`
  font-weight: 700;
  color: var(--text-color-3);

  margin-bottom: 3px;
`;

export const DateAndCategory = styled.div`
  font-size: 10px;
`;

export const Date = styled.span`
  margin-right: 10px;
`;

export const SumAndBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const Sum = styled.span`
  font-weight: 700;
  color: ${({ type }) =>
    type === 'costs' ? 'rgba(231, 25, 46, 1)' : 'rgba(64, 121, 70, 1)'};
  margin-right: 10px;
`;

export const DeleteTransactionBtn = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  background-color: inherit;
  background-image: url(${trashBin});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;

  margin-right: 10px;
`;
