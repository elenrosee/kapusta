import {
  Calendar,
  Summary,
  TypeButtons,
  TransactionForm,
  TransactionTable,
} from 'components';

export const Transactions = () => {
  return (
    <>
      <TypeButtons />
      <Calendar />
      <TransactionForm />
      <TransactionTable />
      <Summary />
    </>
  );
};
