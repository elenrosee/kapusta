/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { CalendarInput } from './Calendar.styled';

// DtePicker settings
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

import { format } from 'date-fns/esm';
import { changeDate } from 'redux/transactions';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  return (
    <CalendarInput
      locale="ru"
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        dispatch(
          changeDate({
            year: format(date, 'yyyy'),
            month: format(date, 'MM'),
            day: format(date, 'dd'),
          })
        );
      }}
      dateFormat="dd.MM.yyyy"
      width="400"
    />
  );
};
