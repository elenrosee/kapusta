import { useState } from 'react';

import { TransactionDate } from './TransactionDate';
import { TransactionForm } from './TransactionForm';
import { TransactionTable } from './TransactionsTable';
import { TransactionTypeButtons } from './TransactionTypeButtons';

export const Transactions = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [type, setType] = useState('costs');

  const date = { year, month, day };

  return (
    <>
      <TransactionTypeButtons setType={setType} />
      <TransactionDate setYear={setYear} setMonth={setMonth} setDay={setDay} />
      <TransactionForm date={date} type={type} />
      <TransactionTable date={date} type={type} />
    </>
  );
};
