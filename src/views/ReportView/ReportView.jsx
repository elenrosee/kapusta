import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Breakpoints } from 'common';
import {
  BackToMainButton,
  Balance,
  Chart,
  MonthCostsIncome,
  MonthPicker,
  ReportByCategories,
  TypeSwitcher,
} from 'components';

import { MonthAndBalance, ReportViewContainer } from './ReportView.styled';

export default function ReportView() {
  const [category, setCategory] = useState('all');

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  return (
    <ReportViewContainer>
      {isMobile && <BackToMainButton />}
      <MonthAndBalance>
        {!isMobile && <BackToMainButton />}
        {isMobile && <MonthPicker />}
        <Balance typeView={'report'} />
        {!isMobile && <MonthPicker />}
      </MonthAndBalance>
      <MonthCostsIncome />
      <TypeSwitcher setCategory={setCategory} />
      <ReportByCategories setCategory={setCategory} />
      <Chart category={category} />
    </ReportViewContainer>
  );
}
