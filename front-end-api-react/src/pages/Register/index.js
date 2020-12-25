import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/Loading';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    let formError = false;

    setIsLoading(false);

    if (nome.length < 3 || nome.length > 255) {
      formError = true;
      toast.error('Nome deve ter entre 3 e 255 caracters');
    }

    if (!isEmail(email)) {
      formError = true;
      toast.error('E-mail invalido');
    }

    if (password.length < 6 || password.length > 50) {
      formError = true;
      toast.error('Senha deve ter entre 6 e 50 caracters');
    }

    if (formError) {
      return;
    }

    setIsLoading(true);

    try {
      await axios.post('/users', {
        nome,
        password,
        email,
      });

      toast.success('Você fez seu cadastro');
      setIsLoading(false);

      history.push('/login');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((err) =>
        err === 'users.email must be unique'
          ? toast.error('Email já cadastrado')
          : toast.error(err)
      );
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome..."
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email..."
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Seu senha..."
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
