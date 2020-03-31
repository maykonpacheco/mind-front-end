import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import pacient from "./pacient/sagas";
import schedule from "./schedule/sagas";

export default function* rootSaga() {
  yield all([auth, user, pacient, schedule]);
}
