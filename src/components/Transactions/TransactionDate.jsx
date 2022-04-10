/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

// DtePicker settings
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// date-fns formatter
import formatWithOptions from 'date-fns/fp/formatWithOptions';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

export const TransactionDate = ({ setYear, setMonth, setDay }) => {
  const [startDate, setStartDate] = useState(new Date());

  const dateToString = formatWithOptions({ locale: ru }, ['dd', 'MM', 'yyyy']);
  const parsedDate = dateToString(startDate).split(',');

  useEffect(() => {
    setDay(parsedDate[0]);
    setMonth(parsedDate[1]);
    setYear(parsedDate[2]);
  }, [startDate]);

  return (
    <DatePicker
      locale="ru"
      selected={startDate}
      onChange={date => {
        setStartDate(date);
      }}
      dateFormat="dd.MM.yyyy"
      width="400"
    />
  );
};
