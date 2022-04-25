import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table';
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
import {
  DeleteTransactionBtn,
  TrTable,
  TrTableBody,
  TrTableHead,
  TrTableHeadRow,
  TrTableRow,
} from './TransactionTable.styled';
import { transactionsListData } from 'utils';
import { useMediaQuery } from 'react-responsive';
import { Breakpoints } from 'common';

export const TransactionTable = () => {
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const type = useSelector(getType);

  useEffect(() => {
    dispatch(fetchUserTransactions(date));
  }, [dispatch, date]);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  const transactions = useSelector(getTransactions);

  const transactionsList =
    type !== 'all' ? transactions.filter(tr => tr.type === type) : transactions;

  console.log(transactionsList);
  // react table build

  const columns = useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'date', // accessor is the "key" in the data
      },
      {
        Header: 'Описание',
        accessor: 'description',
      },
      {
        Header: 'Категория',
        accessor: 'category',
      },
      {
        Header: 'Сумма',
        accessor: 'sum',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: transactionsListData(transactionsList),
    });

  return (
    <TrTable {...getTableProps()}>
      {!isMobile && (
        <TrTableHead>
          {headerGroups.map(headerGroup => (
            <TrTableHeadRow
              {...headerGroup.getHeaderGroupProps()}
              key={uuidv4()}
            >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} key={uuidv4()}>
                  {column.render('Header')}
                </th>
              ))}
            </TrTableHeadRow>
          ))}
        </TrTableHead>
      )}

      <TrTableBody {...getTableBodyProps()}>
        {rows.map(row => {
          console.log(row);
          prepareRow(row);
          return (
            <TrTableRow
              {...row.getRowProps()}
              key={uuidv4()}
              className={row.original.type}
            >
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} key={uuidv4()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
              <td>
                {row.original.id && (
                  <DeleteTransactionBtn
                    onClick={async () => {
                      await dispatch(removeTransaction(row.original.id));
                      dispatch(fetchUserBalance());
                      dispatch(fetchSummary());
                    }}
                    type="submit"
                  >
                    <p>Delete</p>
                  </DeleteTransactionBtn>
                )}
              </td>
            </TrTableRow>
          );
        })}
      </TrTableBody>
    </TrTable>
  );
};
