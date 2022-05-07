/* eslint-disable react/prop-types */
import { CATEGORIES } from 'common';
import { useSelector } from 'react-redux';
import { getReportsData, getType } from 'redux/transactions';

export const ReportByCategories = ({ setCategory }) => {
  const reportData = useSelector(getReportsData);
  const type = useSelector(getType);

  const listElements = arr => {
    const elements = [];

    for (let i = 0; i < arr?.length; i += 1) {
      const Svg = CATEGORIES.find(
        category => category.value === arr[i].category
      ).img;

      elements.push(
        <li key={i}>
          <button
            onClick={e => {
              setCategory(e.currentTarget.name);
            }}
            name={arr[i].category}
            type="button"
          >
            <p>{arr[i].sum}</p>
            <Svg fill={`var(--accent-color)`} />
            <p>{arr[i].category}</p>
          </button>
        </li>
      );
    }

    return elements;
  };

  return (
    <>
      <ul>{listElements(reportData[type])}</ul>
      <div>reports by category</div>
    </>
  );
};
