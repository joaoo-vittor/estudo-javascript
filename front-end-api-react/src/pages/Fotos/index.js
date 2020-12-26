/* eslint-disable no-unused-vars */
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Form, Title } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match }) {
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);
  const [foto, setFoto] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Photos[0].url', ''));
        setIsLoading(false);
      } catch (err) {
        toast.error('Erro ao obter a foto');
        setIsLoading(false);
        history.push('/');
      }
    };

    getData();
  }, [id]);

  const handleChange = async (event) => {
    const novafoto = event.target.files[0];
    const fotoURL = URL.createObjectURL(novafoto);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', novafoto);

    try {
      setIsLoading(true);
      await axios.post('/fotos/', formData, {
        headers: { 'Content-type': 'multpart/form-data' },
      });

      toast.success('Foto enviada com sucesso');
      setIsLoading(false);
    } catch (err) {
      const { status } = get(err, 'response', 0);
      toast.error('Erro ao enviar foto');

      if (status === 401) {
        dispatch(actions.loginFail());
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Aluno" /> : <FaPlus size={40} />}
          <input onChange={handleChange} type="file" name="foto" id="foto" />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
