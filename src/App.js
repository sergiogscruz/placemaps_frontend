import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let routes = (
  <Router>
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/about">
        <div>About</div>
      </Route>
    </Switch>
  </Router>
);

function App() {
  return routes;
}

export default App;
