import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/user/userOperations.js';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    e.currentTarget.name === 'login'
      ? dispatch(logIn({ email, password }))
      : dispatch(register({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h5>Auth form</h5>
      <form autoComplete="off">
        <label>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit} name="login">
          Войти
        </button>
        <button onClick={handleSubmit} name="register">
          Регистрация
        </button>
      </form>
    </div>
  );
};
