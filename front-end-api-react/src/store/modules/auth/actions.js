import * as types from '../types';

export function loginRequest(payload) {
  // eslint-disable-next-line no-console
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFail(payload) {
  return {
    type: types.LOGIN_FAIL,
    payload,
  };
}
