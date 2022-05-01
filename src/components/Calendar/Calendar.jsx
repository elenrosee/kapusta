/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { CalendarInput } from './Calendar.styled';

// DtePicker settings
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

import { changeDate } from 'redux/transactions';
import FormatDate from 'utils/FormatDate';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <CalendarInput
      locale="ru"
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        dispatch(changeDate(FormatDate.getDateObj(date)));
      }}
      dateFormat="dd.MM.yyyy"
      width="400"
    />
  );
};
