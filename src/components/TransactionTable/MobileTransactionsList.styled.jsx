import styled from 'styled-components';

export const TransactionsList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  flex-grow: 3;
  padding-top: 10px;
  padding-bottom: 10px;
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

export const Text = styled.div`
  width: 100%;
`;

export const DescAndSum = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Description = styled.span`
  font-weight: 700;
  color: var(--text-color-3);

  margin-bottom: 3px;
`;

export const Sum = styled.span`
  position: relative;
  bottom: -10px;
  font-weight: 700;
  color: ${({ type }) =>
    type === 'costs' ? 'rgba(231, 25, 46, 1)' : 'rgba(64, 121, 70, 1)'};
`;

export const DateAndCategory = styled.div`
  font-size: 10px;
`;

export const Date = styled.span`
  margin-right: 10px;
`;

export const DeleteTransactionBtn = styled.button`
  border: none;
  background-color: inherit;
  margin: 0 10px;
`;
