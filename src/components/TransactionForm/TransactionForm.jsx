/* eslint-disable react/prop-types */

import { Breakpoints } from 'common';
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
import {
  ArrowBtn,
  Container,
  Form,
  Input,
  Btn,
} from './TransactionForm.styled';

export const TransactionForm = ({ openTrForm }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
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

      case 'category':
        setCategory(value);
        break;

      case 'sum':
        setSum(value);
        break;

      default:
        return;
    }
  };

  const newTransaction = {
    type,
    day: date.day,
    category,
    description,
    month: date.month,
    year: date.year,
    sum: Number(sum),
  };

  const resetForm = () => {
    setDescription('');
    setCategory('');
    setSum('');
  };

  return (
    <Container>
      {isMobile && (
        <ArrowBtn
          onClick={() => {
            dispatch(changeType('all')), openTrForm(false);
          }}
          type="submit"
        />
      )}
      <Form autoComplete="off">
        <Input
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder={'Описание товара'}
          maxLength="40"
          autoComplete="off"
        />
        <Input
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
          placeholder={'Категория товара'}
          maxLength="40"
          autoComplete="off"
        />
        <Input
          type="number"
          name="sum"
          value={sum}
          onChange={handleInputChange}
          placeholder={'0,00'}
          maxLength="20"
          autoComplete="off"
        />
        <div>
          <Btn
            onClick={async e => {
              e.preventDefault();
              if (description.length && category.length && sum.length > 0) {
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
          {isMobile && (
            <Btn
              onClick={e => {
                e.preventDefault();
                resetForm();
              }}
              type="submit"
            >
              Очистить
            </Btn>
          )}
        </div>
      </Form>
    </Container>
  );
};
