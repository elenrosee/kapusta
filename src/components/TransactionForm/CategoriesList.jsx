/* eslint-disable react/prop-types */
import { CATEGORIES } from 'common';
import { useSelector } from 'react-redux';
import { getType } from 'redux/transactions';
import { AllCategories, CategoryBtn } from './CategoriesList.styled';

export const CategoriesList = ({ setCategory, setIsCategoryListOpen }) => {
  const type = useSelector(getType);
  const filtredCategories = CATEGORIES.filter(
    category => category.type == type
  );

  return (
    <AllCategories>
      {filtredCategories.map(category => (
        <li key={filtredCategories.indexOf(category)}>
          <CategoryBtn
            type="button"
            onClick={() => {
              setCategory(category.value);
              setIsCategoryListOpen(false);
            }}
          >
            {category.value}
          </CategoryBtn>
        </li>
      ))}
    </AllCategories>
  );
};
