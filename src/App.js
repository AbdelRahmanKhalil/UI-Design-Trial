import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import ProgressPage from "./components/pages/ProgressPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar >
          
        <Switch>
          <Route path='/UI-Design-Trial/' exact component= {Home} />
          <Route path='/UI-Design-Trial/ProgressPage' exact component= {ProgressPage} />
        </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
