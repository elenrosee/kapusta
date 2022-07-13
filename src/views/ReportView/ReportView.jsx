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

import {
  MonthAndBalance,
  ReportViewContainer,
  CategoriesWrapper,
  Text,
} from './ReportView.styled';
import { useSelector } from 'react-redux';
import { getReportsData, getType } from 'redux/transactions';

export default function ReportView() {
  const [category, setCategory] = useState('all');

  const reportData = useSelector(getReportsData);
  const type = useSelector(getType);

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
      <CategoriesWrapper>
        <TypeSwitcher setCategory={setCategory} />
        {reportData[type].length > 0 ? (
          <ReportByCategories setCategory={setCategory} />
        ) : (
          <Text>
            В этом месяце {type === 'costs' ? 'расходов' : 'доходов'} не было
            :&#40;
          </Text>
        )}
      </CategoriesWrapper>
      {reportData[type].length > 0 && <Chart category={category} />}
    </ReportViewContainer>
  );
}
