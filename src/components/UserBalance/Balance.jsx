import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSummary,
  fetchUserTransactions,
  getDate,
} from 'redux/transactions';

import { getUserBalance, updateUserBalance } from 'redux/user';
import {
  BalanceButton,
  BalanceForm,
  BalanceInput,
  BalanceText,
} from './Balance.styled';

export const Balance = () => {
  const [value, setValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const userBalance = useSelector(getUserBalance);
  const date = useSelector(getDate);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(
      userBalance > 0
        ? userBalance.toLocaleString().concat(' UAH')
        : '00.00 UAH'
    );
  }, [userBalance]);

  const handleInputChange = event => {
    setDefaultValue(event.target.value);
  };

  return (
    <>
      <BalanceForm>
        <BalanceText>Баланс:</BalanceText>
        <div>
          <BalanceInput
            type="number"
            value={defaultValue}
            onChange={handleInputChange}
            placeholder={value}
            maxLength="20"
            autoComplete="off"
          />
          <BalanceButton
            onClick={async () => {
              if (defaultValue.length > 0) {
                await dispatch(updateUserBalance(defaultValue));
                dispatch(fetchUserTransactions(date));
                dispatch(fetchSummary());
                setDefaultValue('');
              }
            }}
            type="submit"
          >
            Подтвердить
          </BalanceButton>
        </div>
      </BalanceForm>
    </>
  );
};
