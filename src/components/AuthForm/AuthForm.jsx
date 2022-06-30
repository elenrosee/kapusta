import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/user/userOperations.js';
import {
  AuthButton,
  AuthInput,
  AuthLabel,
  InputForm,
  LebelText,
  Text,
  Wrapper,
} from './AuthForm.styled';

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
    <Wrapper>
      <InputForm autoComplete="off">
        <Text>
          Вы можете зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </Text>
        <AuthLabel>
          <LebelText>Электронная почта:</LebelText>
          <AuthInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </AuthLabel>
        <AuthLabel>
          <LebelText>Пароль:</LebelText>

          <AuthInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Пароль"
          />
        </AuthLabel>
        <div>
          <AuthButton onClick={handleSubmit} name="login" className="active">
            Войти
          </AuthButton>
          <AuthButton onClick={handleSubmit} name="register">
            Регистрация
          </AuthButton>
        </div>
      </InputForm>
    </Wrapper>
  );
};
