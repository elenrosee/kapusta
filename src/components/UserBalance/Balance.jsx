/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ModalWelcome } from 'components/ModalWelcome';
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
  BalanceWrapper,
} from './Balance.styled';

export const Balance = ({ typeView = 'home' }) => {
  const [value, setValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const userBalance = useSelector(getUserBalance);
  const date = useSelector(getDate);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(
      userBalance > 0
        ? userBalance.toLocaleString().concat(' UAH')
        : '00.00 UAH'
    );

    userBalance ?? setIsOpenModal(true);
  }, [userBalance]);

  const handleInputChange = event => {
    setDefaultValue(event.target.value);
  };

  return (
    <BalanceWrapper>
      <BalanceForm>
        <BalanceText>Баланс:</BalanceText>
        <div>
          <BalanceInput
            type="number"
            value={defaultValue}
            onChange={handleInputChange}
            placeholder={value}
            disabled={typeView === 'report' ? true : false}
            maxLength="20"
            autoComplete="off"
          />
          {typeView !== 'report' && (
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
          )}
        </div>
      </BalanceForm>
      {isOpenModal && <ModalWelcome setIsOpenModal={setIsOpenModal} />}
    </BalanceWrapper>
  );
};
