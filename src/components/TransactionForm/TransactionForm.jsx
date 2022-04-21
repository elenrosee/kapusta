/* eslint-disable react/prop-types */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransaction,
  changeType,
  fetchSummary,
  getDate,
  getType,
} from 'redux/transactions';
import { fetchUserBalance } from 'redux/user';

export const TransactionForm = ({ openTrForm }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  const dispatch = useDispatch();

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

  return (
    <>
      {openTrForm && (
        <button
          onClick={() => {
            dispatch(changeType('all')), openTrForm(false);
          }}
          type="submit"
        >
          Back arrow
        </button>
      )}
      <div>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder={'Описание товара'}
          maxLength="40"
          autoComplete="off"
        />
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
          placeholder={'Категория товара'}
          maxLength="40"
          autoComplete="off"
        />
        <input
          type="number"
          name="sum"
          value={sum}
          onChange={handleInputChange}
          placeholder={0.0}
          maxLength="20"
          autoComplete="off"
        />
        <button
          onClick={async () => {
            if (description.length && category.length && sum.length > 0) {
              await dispatch(addTransaction(newTransaction));
              dispatch(fetchUserBalance());
              dispatch(fetchSummary());
              setCategory('');
              setDescription('');
              setSum('');
            }
          }}
          type="submit"
        >
          <p>Подтвердить</p>
        </button>
      </div>
    </>
  );
};
