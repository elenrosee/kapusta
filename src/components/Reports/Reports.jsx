import { Chart } from 'components';
import { useState } from 'react';
import { ReportByCategories, TypeSwitcher } from '.';

export const Reports = () => {
  const [category, setCategory] = useState('all');

  return (
    <>
      <TypeSwitcher setCategory={setCategory} />
      <ReportByCategories setCategory={setCategory} />
      <Chart category={category} />
    </>
  );
};
