import {
  BackToMainButton,
  Chart,
  MonthCostsIncome,
  MonthPicker,
  ReportByCategories,
  TypeSwitcher,
} from 'components';
import { useState } from 'react';
import { ReportViewContainer, Wraper } from './ReportView.styled';

export default function ReportView() {
  const [category, setCategory] = useState('all');

  return (
    <Wraper>
      <BackToMainButton />
      <ReportViewContainer>
        <div>
          <MonthPicker />
          <span> balance</span>
        </div>
        <MonthCostsIncome />
        <TypeSwitcher setCategory={setCategory} />
        <ReportByCategories setCategory={setCategory} />
        <Chart category={category} />
      </ReportViewContainer>
    </Wraper>
  );
}
