import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeType, getType } from 'redux/transactions';

import { Switcher } from 'common';

export const TypeSwitcher = () => {
  const dispatch = useDispatch();
  const type = useSelector(getType);

  useEffect(() => {
    dispatch(changeType('costs'));
  }, []);

  const changeTypeToggle = () => {
    type === 'costs'
      ? dispatch(changeType('income'))
      : dispatch(changeType('costs'));
  };

  return (
    <>
      <Switcher
        onLeftClick={changeTypeToggle}
        onRightClick={changeTypeToggle}
        text={type === 'costs' ? 'Расходы' : 'Доходы'}
      />
    </>
  );
};
