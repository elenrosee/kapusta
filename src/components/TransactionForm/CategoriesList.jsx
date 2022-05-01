/* eslint-disable react/prop-types */
import { CATEGORIES } from 'common';
import { useSelector } from 'react-redux';
import { getType } from 'redux/transactions';

export const CategoriesList = ({ setCategory, setIsCategoryListOpen }) => {
  const type = useSelector(getType);
  const filtredCategories = CATEGORIES.filter(
    category => category.type == type
  );

  return (
    <ul>
      {filtredCategories.map(category => (
        <li key={filtredCategories.indexOf(category)}>
          <button
            type="button"
            onClick={() => {
              setCategory(category.value);
              setIsCategoryListOpen(false);
            }}
          >
            {category.value}
          </button>
        </li>
      ))}
    </ul>
  );
};
