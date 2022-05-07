import {
  BackToMainButton,
  MonthCostsIncome,
  MonthPicker,
  Reports,
} from 'components';
import { ReportViewContainer, Wraper } from './ReportView.styled';

export default function ReportView() {
  return (
    <Wraper>
      <BackToMainButton />
      <ReportViewContainer>
        <div>
          <MonthPicker />
          <span> balance</span>
        </div>
        <MonthCostsIncome />
        <Reports />
      </ReportViewContainer>
    </Wraper>
  );
}
