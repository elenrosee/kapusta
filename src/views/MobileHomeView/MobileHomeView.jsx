import { useState } from 'react';

import { Container } from 'common';
import {
  Balance,
  Calendar,
  GoToReportsButton,
  MobileTypeButtons,
  TransactionForm,
} from 'components';
import { TransactionTable } from 'components/TransactionTable/TransactionsTable';

export default function MobileHomeView() {
  const [trForm, openTrForm] = useState(false);

  return (
    <>
      <Container>
        {trForm ? (
          <TransactionForm openTrForm={openTrForm} />
        ) : (
          <>
            <GoToReportsButton />
            <Balance />
            <Calendar />
          </>
        )}
        <TransactionTable />
      </Container>
      <MobileTypeButtons openTrForm={openTrForm} />
    </>
  );
}
