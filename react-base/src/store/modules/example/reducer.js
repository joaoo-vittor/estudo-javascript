import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      // eslint-disable-next-line no-console
      console.log('Sucesso =)');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      // eslint-disable-next-line no-console
      console.log('Estou fazendo a requisição');
      return state;
    }

    case types.BOTAO_CLICADO_FAIL: {
      // eslint-disable-next-line no-console
      console.log('Deu erro =(');
      return state;
    }

    default: {
      return state;
    }
  }
}
