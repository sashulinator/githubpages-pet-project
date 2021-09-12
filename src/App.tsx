import React from "react";
import { Route, Link, Router } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <div>
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
              </li>
            </ul>
            <hr />
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
