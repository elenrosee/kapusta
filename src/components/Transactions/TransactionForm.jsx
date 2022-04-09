/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transactions';
import { fetchUserBalance } from 'redux/user';

export const TransactionForm = ({ date , type}) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  const dispatch = useDispatch();

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
      <p>Transaction Form</p>
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
