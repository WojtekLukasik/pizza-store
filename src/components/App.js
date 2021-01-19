import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import HomePage from "./HomePage";
import Products from "./Products";
import ErrorPage from "./ErrorPage";
import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app__container">
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="route-wrapper"
          >
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={Products} />
            <Route component={ErrorPage} />
          </AnimatedSwitch>
        </div>
      </div>
    </Router>
  );
}

export default App;
