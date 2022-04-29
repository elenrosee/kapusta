/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReportsData, getReportsData } from 'redux/transactions';
import { format } from 'date-fns/esm';
import ru from 'date-fns/locale/ru';

import {
  BtnLeft,
  BtnRight,
  CurrentMonth,
  Month,
  Text,
  Wraper,
} from './MonthPicker.styled';

export const MonthPicker = () => {
  const dateNow = new Date();

  const [currentMonth, setCurrentMonth] = useState();
  const [currentYear, setCurrentYear] = useState();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchReportsData({ year: '2022', month: '04' }));
  // }, [dispatch]);
  let i = 0;

  const changeMonth = e => {
    e.currentTarget.name === 'leftButton' ? (i += 1) : (i -= 1);

    dateNow.setMonth(Number(format(dateNow, 'M')) - i);
    console.log(dateNow);
  };

  const reportsData = useSelector(getReportsData);

  // dateNow.setMonth(Number(format(dateNow, 'M')) - 2);

  // console.log(format(dateNow, 'LLLL', { locale: ru }));

  // setMonth(Number(format(dateNow, 'M')) - 1)

  return (
    <Wraper>
      <Text>Текущий период:</Text>
      <CurrentMonth>
        <BtnLeft onClick={e => changeMonth(e)} name="leftButton" />
        <Month>{format(dateNow, 'LLLL', { locale: ru })}</Month>
        <BtnRight onClick={() => changeMonth} name="rightButton" />
      </CurrentMonth>
    </Wraper>
  );
};
