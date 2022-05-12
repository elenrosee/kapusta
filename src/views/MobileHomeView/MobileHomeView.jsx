import { useEffect, useState } from 'react';

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
import { changeType } from 'redux/transactions';
import { useDispatch } from 'react-redux';

export default function MobileHomeView() {
  const [trForm, openTrForm] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeType('all'));
  }, []);

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
