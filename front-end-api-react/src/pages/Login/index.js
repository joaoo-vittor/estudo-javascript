import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let formError = false;

    if (!isEmail(email)) {
      formError = true;
      toast.error('E-mail invalido');
    }

    if (password.length < 6 || password.length > 50) {
      formError = true;
      toast.error('Senha invalida');
    }

    if (formError) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail..."
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha..."
          />
        </label>
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
