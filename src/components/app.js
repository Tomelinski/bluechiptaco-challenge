import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navigation from "./navigation/navigation";
import Feed from "./pages/feed";

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Feed />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Navigation />
      <Router>{routes}</Router>
    </div>
  );
};

export default App;
