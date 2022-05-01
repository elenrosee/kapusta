import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportsData, getDate, getReportsData } from 'redux/transactions';
import { format } from 'date-fns/esm';
import { parse } from 'date-fns';

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
  const { day, month, year } = useSelector(getDate);

  const currentMonth = parse(
    `${day}.${month}.${year}`,
    'dd.MM.yyyy',
    new Date()
  );

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
    if (e.currentTarget.name === 'leftButton') {
      setCount(count + 1);
    } else {
      count !== 1 ? setCount(count - 1) : setCount(count);
    }
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
