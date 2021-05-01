import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import MainNav from "./shared/Navigation/MainNav";
import PageFeed from "./shared/Pages/PostList";

function App() {
  let routes;
  routes = (
    <Switch>
      <Route path="/" exact>
        <PageFeed />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <MainNav />
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
