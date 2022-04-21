/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux';
import { changeType, getType } from 'redux/transactions';
import { Btn, Container } from './MobileTypeButtons.styled';

export const MobileTypeButtons = ({ openTrForm }) => {
  const transactionType = useSelector(getType);
  const dispatch = useDispatch();

  return (
    <Container>
      <Btn
        onClick={() => {
          dispatch(changeType('costs'));
          openTrForm && openTrForm(true);
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
          openTrForm && openTrForm(true);
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
