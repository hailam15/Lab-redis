import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./user";
import Admin from "./admin";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={User} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}
