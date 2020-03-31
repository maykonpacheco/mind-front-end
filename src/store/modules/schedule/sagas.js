import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "~/services/history";
import { toast } from "react-toastify";
import api from "~/services/api";

import { createScheduleFailure } from "./actions";
import { useSelector } from "react-redux";

export function* createSchedule({ payload }) {
  const pacient = 1;

  try {
    const { date, time, value } = payload;

    yield call(api.post, `pacients/${pacient}/schedules`, {
      date,
      time,
      value
    });

    history.push("/sessions");
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados!");

    yield put(createScheduleFailure());
  }
}

export default all([
  takeLatest("@auth/CREATE_SCHEDULE_REQUEST", createSchedule)
]);
