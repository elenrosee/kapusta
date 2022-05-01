import { useState } from 'react';

import {
  Balance,
  Calendar,
  GoToReportsButton,
  MobileTransactionsList,
  MobileTypeButtons,
  TransactionForm,
} from 'components';

import {
  MobileViewContainer,
  MobilleHomeContainer,
} from './MobileHomeView.styled';

export default function MobileHomeView() {
  const [trForm, openTrForm] = useState(false);

  return (
    <>
      <MobileViewContainer>
        {trForm ? (
          <TransactionForm openTrForm={openTrForm} />
        ) : (
          <MobilleHomeContainer>
            <GoToReportsButton />
            <Balance />
            <Calendar />
          </MobilleHomeContainer>
        )}
        <MobileTransactionsList />
      </MobileViewContainer>
      <MobileTypeButtons openTrForm={openTrForm} />
    </>
  );
}
