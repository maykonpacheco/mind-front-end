import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "~/services/history";
import { toast } from "react-toastify";
import api from "~/services/api";

import { SignInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(SignInSuccess(token, user));

    history.push("/sessions");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { username, email, password } = payload;

    yield call(api.post, "users", {
      username,
      email,
      password,
      provider: true
    });

    history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados!");

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
