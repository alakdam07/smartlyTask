import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <br></br>
        <br></br>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
