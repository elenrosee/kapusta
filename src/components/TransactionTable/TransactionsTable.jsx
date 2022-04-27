import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  fetchSummary,
  fetchUserTransactions,
  getDate,
  getTransactions,
  getType,
  removeTransaction,
} from 'redux/transactions';
import { fetchUserBalance } from 'redux/user';
import { DeleteTransactionBtn } from './MobileTransactionsList.styled';
import {
  Sum,
  TrTable,
  TrTableBody,
  TrTableHead,
  TrTableHeadRow,
  TrTableRow,
} from './TransactionTable.styled';

export const TransactionTable = () => {
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const type = useSelector(getType);

  useEffect(() => {
    dispatch(fetchUserTransactions(date));
  }, [dispatch, date]);

  const transactions = useSelector(getTransactions);
  const filtredTransactions = transactions.filter(tr => tr.type === type);
  const sortedTransactions = [...filtredTransactions].sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    } else {
      return 1;
    }
  });

  const tableRows = arr => {
    const tableLength = arr.length < 10 ? 10 : arr.length;

    const rows = [];

    for (let i = 0; i < tableLength; i += 1) {
      rows.push(
        <TrTableRow key={uuidv4()}>
          <th>
            {arr[i] ? `${arr[i].day}.${arr[i].month}.${arr[i].year}` : ''}
          </th>
          <th>{arr[i]?.description || ''}</th>
          <th>{arr[i]?.category || ''}</th>
          <Sum type={arr[i]?.type}>
            {arr[i]
              ? arr[i].type === 'costs'
                ? `- ${arr[i].sum} грн.`
                : `${arr[i].sum} грн.`
              : ''}
          </Sum>
          <th>
            {arr[i] && (
              <DeleteTransactionBtn
                onClick={async () => {
                  await dispatch(removeTransaction(arr[i]._id));
                  dispatch(fetchUserBalance());
                  dispatch(fetchSummary());
                }}
                type="submit"
              />
            )}
          </th>
        </TrTableRow>
      );
    }

    return rows;
  };

  return (
    <TrTable>
      <TrTableHead>
        <TrTableHeadRow>
          <th>Дата</th>
          <th>Описание</th>
          <th>Категория</th>
          <th colSpan="2">Сумма</th>
        </TrTableHeadRow>
      </TrTableHead>
      <TrTableBody>{tableRows(sortedTransactions)}</TrTableBody>
    </TrTable>
  );
};
