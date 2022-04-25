import styled from 'styled-components';
import calendar from 'images/calendar.svg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Breakpoints, MQ } from 'common';

export const CalendarInput = styled(DatePicker)`
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${MQ(Breakpoints.md)} {
    margin: 0;
  }

  width: 104px;
  height: 20px;
  text-align: right;

  color: var(--text-color-3);
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.04em;
  font-weight: 800;

  background-image: url(${calendar});
  background-repeat: no-repeat;
  background-size: contain;

  background-color: transparent;
  border: none;
  outline: none;
`;
