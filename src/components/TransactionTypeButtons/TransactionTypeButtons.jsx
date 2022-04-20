/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { changeType } from 'redux/transactions';

export const TransactionTypeButtons = ({ openTrForm }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(changeType('costs'));
          openTrForm && openTrForm(true);
        }}
        type="submit"
      >
        <p>Расход</p>
      </button>
      <button
        onClick={() => {
          dispatch(changeType('income'));
          openTrForm && openTrForm(true);
        }}
        type="submit"
      >
        <p>Доход</p>
      </button>
    </>
  );
};
