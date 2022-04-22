import { useEffect, useState } from 'react';

import {
  Balance,
  Calendar,
  GoToReportsButton,
  MobileTypeButtons,
  TransactionForm,
} from 'components';
import { TransactionTable } from 'components/TransactionTable/TransactionsTable';
import { useDispatch } from 'react-redux';
import { changeType } from 'redux/transactions';
import { MobilleHomeContainer } from './MobileHomeView.styled';
import { Container } from 'common';

export default function MobileHomeView() {
  const [trForm, openTrForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeType('all'));
  }, [dispatch]);

  return (
    <>
      <Container>
        <MobilleHomeContainer>
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
        </MobilleHomeContainer>
      </Container>
      <MobileTypeButtons openTrForm={openTrForm} />
    </>
  );
}
