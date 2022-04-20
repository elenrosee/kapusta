import { useState } from 'react';

import { Container } from 'common';
import {
  Balance,
  Calendar,
  GoToReportsButton,
  TransactionForm,
  TransactionTypeButtons,
} from 'components';
import { TransactionTable } from 'components/Transactions/TransactionsTable';

export default function MobileTransactionsView() {
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
            <TransactionTable />
          </>
        )}
      </Container>
      <TransactionTypeButtons openTrForm={openTrForm} />
    </>
  );
}
