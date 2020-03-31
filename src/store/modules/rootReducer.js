import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import pacient from "./pacient/reducer";
import schedule from "./schedule/reducer";

const reducers = combineReducers({ auth, user, pacient, schedule });

export default reducers;
