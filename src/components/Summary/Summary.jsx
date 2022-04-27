/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummary, getSummary, getType } from 'redux/transactions';

import { v4 as uuidv4 } from 'uuid';
import { SummaryList, SummaryTable } from './Summary.styled';

export const Summary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummary());
  }, [dispatch]);

  const summary = useSelector(getSummary);
  const type = useSelector(getType);

  return (
    <SummaryList>
      <li>Сводка</li>
      {summary[type]?.map(month => {
        return (
          <li key={uuidv4()}>
            <span>{month.monthName}</span>
            <span>{month.sum}</span>
          </li>
        );
      })}
    </SummaryList>
  );
};
