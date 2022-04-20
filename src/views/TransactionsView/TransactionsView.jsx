import { Container } from 'common';
import { Balance, GoToReportsButton, Transactions } from 'components';

export default function TransactionsView() {
  return (
    <Container>
      <GoToReportsButton />
      <Balance />
      <Transactions />
    </Container>
  );
}
