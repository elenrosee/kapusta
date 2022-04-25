import { Container } from 'common';
import { Balance, GoToReportsButton, Transactions } from 'components';
import { PageNav } from './HomeView.styled';

export default function HomeView() {
  return (
    <Container>
      <PageNav>
        <Balance />
        <GoToReportsButton />
      </PageNav>

      <Transactions />
    </Container>
  );
}
