import axios from 'axios';
import {browserHistory} from 'react-router';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER});

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signupUser({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER});

        console.log('success', response);

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/feature');
      })
      .catch(response => {
        dispatch(authError('It exist'))
      })
  }
}

export function signoutUser() {

  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}