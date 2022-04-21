import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table';
import {
  fetchSummary,
  fetchUserTransactions,
  getDate,
  getTransactions,
  getType,
  removeTransaction,
} from 'redux/transactions';
import { fetchUserBalance } from 'redux/user';

export const TransactionTable = () => {
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const type = useSelector(getType);

  useEffect(() => {
    dispatch(fetchUserTransactions(date));
  }, [dispatch, date]);

  const transactions = useSelector(getTransactions);

  const transactionsList =
    type !== 'all' ? transactions.filter(tr => tr.type === type) : transactions;

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

  const data = [];

  if (transactionsList.length < 10) {
    for (let i = 0; i < 10; i += 1) {
      transactionsList[i]
        ? data.push({
            date: `${transactionsList[i].day}.${transactionsList[i].month}.${transactionsList[i].year}`,
            description: transactionsList[i].description,
            category: transactionsList[i].category,
            sum: transactionsList[i].sum,
            id: transactionsList[i]._id,
          })
        : data.push({
            date: '',
            description: '',
            category: '',
            sum: '',
            id: '',
          });
    }
  } else {
    transactionsList.forEach(
      ({ day, month, year, description, category, sum, _id }) =>
        data.push({
          date: `${day}.${month}.${year}`,
          description,
          category,
          sum,
          id: _id,
        })
    );
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={headerGroups.indexOf(headerGroup)}
          >
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
                key={headerGroup.headers.indexOf(column)}
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
            <tr {...row.getRowProps()} key={rows.indexOf(row)}>
              {row.cells.map(cell => {
                return (
                  <td
                    className={cell.column.id}
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                    key={row.cells.indexOf(cell)}
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
                    dispatch(fetchSummary());
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
