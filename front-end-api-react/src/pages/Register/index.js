import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailSored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailSored);
  }, [emailSored, id, nomeStored]);

  async function handleSubmit(event) {
    event.preventDefault();
    let formError = false;

    if (nome.length < 3 || nome.length > 255) {
      formError = true;
      toast.error('Nome deve ter entre 3 e 255 caracters');
    }

    if (!isEmail(email)) {
      formError = true;
      toast.error('E-mail invalido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formError = true;
      toast.error('Senha deve ter entre 6 e 50 caracters');
    }

    // eslint-disable-next-line no-useless-return
    if (formError) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));

    // setIsLoading(true);

    // try {
    //   await axios.post('/users', {
    //     nome,
    //     password,
    //     email,
    //   });

    //   toast.success('Você fez seu cadastro');
    //   setIsLoading(false);

    //   history.push('/login');
    // } catch (e) {
    //   const errors = get(e, 'response.data.errors', []);

    //   errors.map((err) =>
    //     err === 'users.email must be unique'
    //       ? toast.error('Email já cadastrado')
    //       : toast.error(err)
    //   );
    // }
  }

  return (
    <Container>
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
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

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
