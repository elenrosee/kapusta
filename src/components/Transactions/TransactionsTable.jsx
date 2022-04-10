/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table';
import {
  fetchUserTransactions,
  getTransactions,
  removeTransaction,
} from 'redux/transactions';
import { fetchUserBalance, getUserBalance } from 'redux/user';

export const TransactionTable = ({ date, type }) => {
  const dispatch = useDispatch();
  const userBalance = useSelector(getUserBalance);

  useEffect(() => {
    if (date.day.length > 0) {
      dispatch(fetchUserTransactions(date));
    }
  }, [dispatch, date, userBalance]);

  const transactionsList = useSelector(getTransactions).filter(
    tr => tr.type === type
  );

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

  const data = transactionsList.map(
    ({ day, month, year, description, category, sum, _id }) => ({
      date: `${day}.${month}.${year}`,
      description,
      category,
      sum,
      id: _id,
    })
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
              <td>
                <button
                  onClick={async () => {
                    await dispatch(removeTransaction(row.original.id));
                    dispatch(fetchUserBalance());
                  }}
                  type="submit"
                >
                  <p>Delete</p>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
