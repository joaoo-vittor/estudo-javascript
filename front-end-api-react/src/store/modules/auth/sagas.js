/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens/', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Login Realizado com Sucesso');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuario ou senha invalidos');
    yield put(actions.loginFail());
  }
}

function persistREHYDRATE({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Dados alterados com sucesso');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess());
      history.push('/login');
    }
  } catch (err) {
    const errors = get(err, 'response.data.errors', []);
    const status = get(err, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer o login novamente!');
      yield put(actions.loginFail());
      return history.push('login');
    }

    if (errors.length > 0) {
      errors.map((erro) => {
        if (erro === 'users.email must be unique') {
          return toast.error('E-mail já cadastrado!');
        }
        return toast.error(erro);
      });
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFail());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistREHYDRATE),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
