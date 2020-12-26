/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture, Titulo, EditFoto } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Fotos = get(data, 'Photos[0].url', '');

        setFoto(Fotos);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.error(error));
          history.push('/');
        }
      }
    }

    getData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length >= 255) {
      toast.error('Nome precisa ter entra 3 e 255 caracters');
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length >= 255) {
      toast.error('Sobrenome precisa ter entra 3 e 255 caracters');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Email é invalido');
      formErrors = true;
    }

    if (!isInt(String(idade)) || Number(idade) < 0) {
      toast.error('Idade invalida');
      formErrors = true;
    }

    if (!isFloat(String(peso)) || Number(peso) < 0) {
      toast.error('Peso invalida');
      formErrors = true;
    }

    if (!isFloat(String(altura)) || Number(altura) < 0) {
      toast.error('Altura invalida');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        // alterando
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) Editado(a) com sucesso');
      } else {
        // criando
        const { data } = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) Criado(a) com sucesso');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        dispatch(actions.loginFail());
      }
    }
  };

  return (
    <Container>
      <Titulo>{id ? 'Editar Aluno' : 'Novo Aluno'}</Titulo>
      <Loading isLoading={isloading} />

      {id && (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={150} />}
          <EditFoto>
            <Link to={`/fotos/${id}`}>
              <FaEdit size={25} color="#fff" />
            </Link>
          </EditFoto>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o seu nome..."
            type="text"
            name="nome"
            id="nome"
          />
        </label>
        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Digite o seu sobrenome..."
            type="text"
            name="sobrenome"
            id="sobrenome"
          />
        </label>
        <label htmlFor="nome">
          E-mail:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu e-mail..."
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="idade">
          Idade:
          <input
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Digite o sua idade..."
            type="number"
            name="idade"
            id="idade"
          />
        </label>
        <label htmlFor="peso">
          Peso:
          <input
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite o seu peso..."
            type="text"
            name="peso"
            id="peso"
          />
        </label>
        <label htmlFor="altura">
          Altura:
          <input
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite o sua altura..."
            type="text"
            name="altura"
            id="altura"
          />
        </label>
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
