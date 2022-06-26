import { Breakpoints } from 'common';
import {
  Summary,
  TypeButtons,
  TransactionForm,
  TransactionTable,
} from 'components';
import { useMediaQuery } from 'react-responsive';
import { TransactionsContainer } from './Transactions.styled';

export const Transactions = () => {
  const isDesktop = useMediaQuery({ minWidth: Breakpoints.lg });

  return (
    <>
      <TypeButtons />
      <TransactionsContainer>
        <TransactionForm />
        <TransactionTable />
        {isDesktop && <Summary />}
      </TransactionsContainer>
      {!isDesktop && <Summary />}
    </>
  );
};
