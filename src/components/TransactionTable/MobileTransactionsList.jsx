import { SvgTrashBin } from 'iconComponents';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  Date,
  DateAndCategory,
  DeleteTransactionBtn,
  DescAndSum,
  Description,
  Sum,
  Text,
  Transaction,
  TransactionsList,
} from './MobileTransactionsList.styled';

export const MobileTransactionsList = () => {
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const type = useSelector(getType);

  useEffect(() => {
    dispatch(fetchUserTransactions(date));
  }, [dispatch, date]);

  const transactions = useSelector(getTransactions);

  const transactionsList =
    type !== 'all' ? transactions.filter(tr => tr.type === type) : transactions;

  const sortedTransactions = [...transactionsList].sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <TransactionsList>
      {sortedTransactions.map(
        ({ category, description, sum, type, _id: id, day, month, year }) => {
          return (
            <Transaction key={id}>
              <Text>
                <DescAndSum>
                  <Description>{description}</Description>{' '}
                  <Sum type={type}>
                    {type === 'costs' ? `- ${sum} грн.` : `${sum} грн.`}
                  </Sum>
                </DescAndSum>
                <DateAndCategory>
                  <Date>{`${day}.${month}.${year}`}</Date>
                  <span>{category}</span>
                </DateAndCategory>
              </Text>

              <DeleteTransactionBtn
                onClick={async () => {
                  await dispatch(removeTransaction(id));
                  dispatch(fetchUserBalance());
                  dispatch(fetchSummary());
                }}
                type="submit"
              >
                <SvgTrashBin />
              </DeleteTransactionBtn>
            </Transaction>
          );
        }
      )}
    </TransactionsList>
  );
};
