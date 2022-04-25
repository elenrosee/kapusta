/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeType, getType } from 'redux/transactions';
import { Btn, Container } from './TypeButtons.styled';

export const TypeButtons = () => {
  const transactionType = useSelector(getType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeType('costs'));
  }, [dispatch]);

  return (
    <Container>
      <Btn
        onClick={() => {
          dispatch(changeType('costs'));
        }}
        className={transactionType === 'costs' ? 'active' : ''}
        name="costs"
        type="submit"
      >
        Расход
      </Btn>
      <Btn
        onClick={() => {
          dispatch(changeType('income'));
        }}
        className={transactionType === 'income' ? 'active' : ''}
        name="income"
        type="submit"
      >
        Доход
      </Btn>
    </Container>
  );
};
