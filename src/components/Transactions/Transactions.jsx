import {} from '../TransactionForm/TransactionForm';
import { TransactionTable } from './TransactionsTable';

import {
  Calendar,
  Summary,
  TransactionTypeButtons,
  TransactionForm,
} from 'components';

export const Transactions = () => {
  return (
    <>
      <TransactionTypeButtons />
      <Calendar />
      <TransactionForm />
      <TransactionTable />
      <Summary />
    </>
  );
};
