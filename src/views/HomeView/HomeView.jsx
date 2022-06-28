import { Balance, GoToReportsButton, Transactions } from 'components';
import { HomeViewContainer, PageNav } from './HomeView.styled';

export default function HomeView() {
  return (
    <HomeViewContainer>
      <PageNav>
        <Balance />
        <GoToReportsButton />
      </PageNav>

      <Transactions />
    </HomeViewContainer>
  );
}
