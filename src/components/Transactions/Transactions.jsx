import {
  Summary,
  TypeButtons,
  TransactionForm,
  TransactionTable,
} from 'components';
import { TransactionsContainer } from './Transactions.styled';

export const Transactions = () => {
  return (
    <>
      <TypeButtons />
      <TransactionsContainer>
        <TransactionForm />
        <TransactionTable />
      </TransactionsContainer>

      <Summary />
    </>
  );
};
