/* eslint-disable react/prop-types */

import { Breakpoints } from 'common';
import { Calendar } from 'components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  addTransaction,
  changeType,
  fetchSummary,
  getDate,
  getType,
} from 'redux/transactions';
import { fetchUserBalance } from 'redux/user';
import { CategoriesList } from '.';
import {
  ArrowBtn,
  FormContainer,
  Form,
  Btn,
  InputDescription,
  ChooseCategoryBtn,
  InputSum,
  BtnWraper,
} from './TransactionForm.styled';

export const TransactionForm = ({ openTrForm }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Категория товара');
  const [sum, setSum] = useState('');
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  const date = useSelector(getDate);
  const type = useSelector(getType);

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'description':
        setDescription(value);
        break;

      case 'sum':
        setSum(value);
        break;

      default:
        return;
    }
  };

  const newTransaction = {
    ...date,
    type,
    category,
    description,
    sum: Number(sum),
  };

  console.log(newTransaction);

  const resetForm = () => {
    setDescription('');
    setCategory('Категория товара');
    setSum('');
  };

  return (
    <FormContainer>
      {isMobile && (
        <ArrowBtn
          onClick={() => {
            dispatch(changeType('all')), openTrForm(false);
          }}
          type="submit"
        />
      )}

      <Form autoComplete="off">
        {!isMobile && <Calendar />}
        <InputDescription
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder={'Описание товара'}
          maxLength="40"
          autoComplete="off"
        />
        <div>
          <ChooseCategoryBtn
            type="button"
            onClick={() => setIsCategoryListOpen(true)}
          >
            {category}
          </ChooseCategoryBtn>
          {isCategoryListOpen && (
            <CategoriesList
              setCategory={setCategory}
              setIsCategoryListOpen={setIsCategoryListOpen}
            />
          )}
        </div>
        <InputSum
          type="number"
          name="sum"
          value={sum}
          onChange={handleInputChange}
          placeholder={'0,00'}
          maxLength="20"
          autoComplete="off"
        />
      </Form>

      <BtnWraper>
        <Btn
          onClick={async e => {
            e.preventDefault();
            if (
              description.length &&
              category !== 'Категория товара' &&
              sum.length > 0
            ) {
              await dispatch(addTransaction(newTransaction));
              dispatch(fetchUserBalance());
              dispatch(fetchSummary());
              resetForm();
            }
          }}
          type="submit"
        >
          ввод
        </Btn>
        <Btn
          onClick={e => {
            e.preventDefault();
            resetForm();
          }}
          type="submit"
        >
          Очистить
        </Btn>
      </BtnWraper>
    </FormContainer>
  );
};
