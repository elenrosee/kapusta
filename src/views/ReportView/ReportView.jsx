import {
  BackToMainButton,
  MonthCostsIncome,
  MonthPicker,
  Reports,
} from 'components';

export default function MobileReportView() {
  return (
    <div>
      <BackToMainButton />
      <div>
        <MonthPicker />
        <span> balance</span>
      </div>
      <MonthCostsIncome />
      <Reports />
    </div>
  );
}
