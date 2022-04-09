import { Balance, GoToReportsButton, Transactions } from 'components';

export default function TransactionsView() {
  return (
    <>
      <h3>TransactionsView </h3>
      <GoToReportsButton />
      <Balance />
      <Transactions />
    </>
  );
}
