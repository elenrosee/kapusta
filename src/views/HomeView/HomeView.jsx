import { Container } from 'common';
import { Balance, GoToReportsButton, Transactions } from 'components';

export default function HomeView() {
  return (
    <Container>
      <GoToReportsButton />
      <Balance />
      <Transactions />
    </Container>
  );
}
