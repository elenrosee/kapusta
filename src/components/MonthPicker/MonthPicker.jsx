import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReportsData } from 'redux/transactions';
import { format } from 'date-fns/esm';

import {
  ArrowIcon,
  BtnLeft,
  BtnRight,
  CurrentMonth,
  Month,
  Text,
  Wraper,
} from './MonthPicker.styled';
import arrowheadOrange from 'images/arrowheadOrange.svg';

import FormatDate from 'utils/FormatDate';

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

  const changeMonth = e => {
    e.currentTarget.name === 'leftButton'
      ? setCount(count + 1)
      : setCount(count - 1);
  };

  return (
    <Wraper>
      <Text>Текущий период:</Text>
      <CurrentMonth>
        <BtnLeft onClick={e => changeMonth(e)} name="leftButton">
          <ArrowIcon
            src={arrowheadOrange}
            rotate={'180'}
            alt="Иконка открытия меню категорий"
          />
        </BtnLeft>
        <Month>
          {monthName} {year}
        </Month>
        <BtnRight onClick={e => changeMonth(e)} name="rightButton">
          <ArrowIcon
            src={arrowheadOrange}
            rotate={'0'}
            alt="Иконка открытия меню категорий"
          />
        </BtnRight>
      </CurrentMonth>
    </Wraper>
  );
};
