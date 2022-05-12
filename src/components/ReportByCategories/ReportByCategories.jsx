/* eslint-disable react/prop-types */
import { CATEGORIES } from 'common';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getReportsData, getType } from 'redux/transactions';
import {
  Category,
  CategoryBtn,
  CategoryList,
  CategoryText,
  SvgWrap,
} from './ReportByCategories.styled';

export const ReportByCategories = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const reportData = useSelector(getReportsData);
  const type = useSelector(getType);

  const listElements = arr => {
    const elements = [];

    for (let i = 0; i < arr?.length; i += 1) {
      const Svg = CATEGORIES.find(
        category => category.value === arr[i].category
      ).img;

      elements.push(
        <Category key={i}>
          <CategoryBtn
            onFocus={e => {
              setCategory(e.currentTarget.name);
              setSelectedCategory(e.currentTarget.name);
            }}
            onBlur={() => {
              setCategory('all');
              setSelectedCategory('');
            }}
            name={arr[i].category}
            type="button"
          >
            <CategoryText>{arr[i].sum}</CategoryText>
            <SvgWrap focused={selectedCategory === arr[i].category}>
              <Svg
                fill={
                  selectedCategory === arr[i].category
                    ? `var(--accent-color)`
                    : `var(--color-icon)`
                }
              />
            </SvgWrap>
            <CategoryText>{arr[i].category}</CategoryText>
          </CategoryBtn>
        </Category>
      );
    }

    return elements;
  };

  return <CategoryList>{listElements(reportData[type])}</CategoryList>;
};
