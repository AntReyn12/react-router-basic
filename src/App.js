import React from "react";
import "./App.css";
import {Switch, Route, useHistory, Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button>
            <Link to="/about"> About Us </Link>
          </button>
          <button onClick={() => history.push("/contact")}>Contact Us</button>
          <button onClick={() => history.push("/")}>Home Page</button>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
