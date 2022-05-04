/* eslint-disable no-unused-vars */
import { CATEGORIES } from 'common';
import { useSelector } from 'react-redux';
import { getReportsData } from 'redux/transactions';

export const ReportByCategories = () => {
  const reportData = useSelector(getReportsData);

  const listElements = arr => {
    const elements = [];

    for (let i = 0; i < arr?.length; i += 1) {
      const Svg = CATEGORIES.find(
        category => category.value === arr[i].category
      ).img;

      elements.push(
        <li key={i}>
          <p>{arr[i].sum}</p>
          <Svg fill={`var(--accent-color)`} />
          <p>{arr[i].category}</p>
        </li>
      );
    }

    return elements;
  };

  return (
    <>
      <ul>{listElements(reportData.income)}</ul>
      <div>reports by category</div>
    </>
  );
};
