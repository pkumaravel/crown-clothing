import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatPage = () => {
  return (
    <div>
      <h1>Hat Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/hats">Hats</Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
