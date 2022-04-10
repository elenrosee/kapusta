/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary, getSummary } from 'redux/transactions';
import { getUserBalance } from 'redux/user';

export const Summary = ({ type }) => {
  const dispatch = useDispatch();
  const userBalance = useSelector(getUserBalance);

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch, userBalance]);

  const summary = useSelector(getSummary);

  console.log(type);
  console.log(summary);

  return (
    <>
      <h3>Сводка</h3>
    </>
  );
};
