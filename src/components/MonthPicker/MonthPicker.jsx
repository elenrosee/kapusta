/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReportsData } from 'redux/transactions';
import { format } from 'date-fns/esm';

import { Text, Wraper } from './MonthPicker.styled';

import FormatDate from 'utils/FormatDate';
import { Switcher } from 'common';

export const MonthPicker = () => {
  const currentMonth = new Date();

  const [count, setCount] = useState(1);
  const [monthName, setMonthName] = useState(
    FormatDate.getMonthName(currentMonth)
  );
  const [year, setYear] = useState(FormatDate.getYear(currentMonth));

  const dispatch = useDispatch();

  useEffect(() => {
    currentMonth.setMonth(Number(format(currentMonth, 'M') - count));
    setMonthName(FormatDate.getMonthName(currentMonth));
    setYear(FormatDate.getYear(currentMonth));
    dispatch(fetchReportsData(FormatDate.getMonthYearObj(currentMonth)));
  }, [dispatch, count]);

  return (
    <Wraper>
      <Text>Текущий период:</Text>
      <Switcher
        onLeftClick={() => setCount(count + 1)}
        onRightClick={() => setCount(count - 1)}
        text={`${monthName} ${year}`}
      />
    </Wraper>
  );
};
