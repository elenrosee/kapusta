import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary, getSummary, getType } from 'redux/transactions';
import { useTable } from 'react-table';

export const Summary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  const summary = useSelector(getSummary);
  const type = useSelector(getType);

  // react table build

  const columns = useMemo(
    () => [
      {
        accessor: 'monthName', // accessor is the "key" in the data
      },
      {
        accessor: 'sum',
      },
    ],
    []
  );

  const data = summary[type] || [];

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <>
      <h3>Сводка</h3>

      {data.length > 1 && (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            <tr>
              <th
                colSpan="2"
                style={{
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                Сводка
              </th>
            </tr>
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rows.indexOf(row)}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        key={row.monthName}
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
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
