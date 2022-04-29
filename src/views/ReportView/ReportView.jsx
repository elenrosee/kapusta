import { BackToMainButton, MonthCostsIncome, MonthPicker } from 'components';

export default function MobileReportView() {
  return (
    <div>
      <BackToMainButton />
      <div>
        <MonthPicker />
        <span> balance</span>
      </div>
      <MonthCostsIncome />
      <div>reports by category</div>
      <div>chart</div>
    </div>
  );
}
