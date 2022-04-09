/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    dispatch(fetchUserTransactions(date));
  }, [dispatch, date, userBalance]);

  const transactions = useSelector(getTransactions);

  return (
    <>
      <p>Transaction Table</p>
      <ul>
        {transactions
          .filter(tr => tr.type === type)
          .map(({ day, month, year, description, category, sum, _id }) => (
            <li key={_id}>
              <span>
                {day}.{month}.{year}
              </span>
              <span> {description} </span>
              <span> {category} </span>
              <span> {sum} </span>
              <span>
                <button
                  onClick={async () => {
                    await dispatch(removeTransaction(_id));
                    dispatch(fetchUserBalance());
                    dispatch(fetchUserTransactions(date));
                  }}
                  type="submit"
                >
                  <p>Delete</p>
                </button>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
};
