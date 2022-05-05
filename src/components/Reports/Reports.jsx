import { Chart, ReportByCategories, TypeSwitcher } from '.';

export const Reports = () => {
  return (
    <>
      <TypeSwitcher />
      <ReportByCategories />
      <Chart />
    </>
  );
};
