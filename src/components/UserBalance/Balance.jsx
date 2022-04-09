import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserBalance, updateUserBalance } from 'redux/user';

export const Balance = () => {
  const [value, setValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const userBalance = useSelector(getUserBalance);

  const dispatch = useDispatch();

  useEffect(() => {
    setValue(
      userBalance > 0
        ? userBalance.toLocaleString('ru').concat(' UAH')
        : '00.00 UAH'
    );
  }, [userBalance]);

  const handleInputChange = event => {
    setDefaultValue(event.target.value);
  };

  return (
    <>
      <p>Баланс:</p>
      <div>
        <input
          type="number"
          value={defaultValue}
          onChange={handleInputChange}
          placeholder={value}
          maxLength="20"
          autoComplete="off"
        />
        <button
          onClick={async () => {
            if (defaultValue.length > 0) {
              await dispatch(updateUserBalance(defaultValue));
              setDefaultValue('');
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
