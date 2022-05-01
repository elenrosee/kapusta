import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportsData, getReportsData } from 'redux/transactions';
import { format } from 'date-fns/esm';

import {
  BtnLeft,
  BtnRight,
  CurrentMonth,
  Month,
  Text,
  Wraper,
} from './MonthPicker.styled';

import FormatDate from 'utils/FormatDate';

export const MonthPicker = () => {
  const currentMonth = new Date();

  const [count, setCount] = useState(1);
  const [monthName, setMonthName] = useState(
    FormatDate.getMonthName(currentMonth)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    currentMonth.setMonth(Number(format(currentMonth, 'M') - count));
    setMonthName(FormatDate.getMonthName(currentMonth));
    dispatch(fetchReportsData(FormatDate.getMonthYearObj(currentMonth)));
  }, [dispatch, count]);

  const changeMonth = e => {
    e.currentTarget.name === 'leftButton'
      ? setCount(count + 1)
      : setCount(count - 1);
  };

  const reportsData = useSelector(getReportsData);
  console.log(reportsData);

  return (
    <Wraper>
      <Text>Текущий период:</Text>
      <CurrentMonth>
        <BtnLeft onClick={e => changeMonth(e)} name="leftButton" />
        <Month>{monthName}</Month>
        <BtnRight onClick={e => changeMonth(e)} name="rightButton" />
      </CurrentMonth>
    </Wraper>
  );
};
