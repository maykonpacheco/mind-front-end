import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";

import Sessions from "~/pages/Sessions";
import NewSessions from "~/pages/Sessions/NewSessions";

import Pacients from "~/pages/Pacients";
import NewPacients from "~/pages/Pacients/NewPacients";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/sessions" exact component={Sessions} isPrivate />
      <Route path="/new-sessions" exact component={NewSessions} isPrivate />

      <Route path="/pacients" exact component={Pacients} isPrivate />
      <Route path="/new-pacients" exact component={NewPacients} isPrivate />
    </Switch>
  );
}
