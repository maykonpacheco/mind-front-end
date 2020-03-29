import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "~/services/history";
import { toast } from "react-toastify";
import api from "~/services/api";

import { createPacientFailure } from "./actions";

export function* createPacient({ payload }) {
  try {
    const { username, fone, email } = payload;

    yield call(api.post, "pacients", {
      username,
      fone,
      email
    });

    history.push("/pacients");
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados!");

    yield put(createPacientFailure());
  }
}

export default all([takeLatest("@auth/CREATE_PACIENT_REQUEST", createPacient)]);
