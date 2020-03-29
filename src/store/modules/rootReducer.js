import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import pacient from "./pacient/reducer";

const reducers = combineReducers({ auth, user, pacient });

export default reducers;
