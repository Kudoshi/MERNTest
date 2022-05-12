import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CompetitionList from "./components/competition-list.component";
import CreateCompetition from "./components/create-competition.component";

function App() {
  return (
    <Router path="/">
       <Navbar />
       <br/>
       <Routes>
          <Route path="/" element={<CompetitionList/>}/>
          <Route path="/create" element={<CreateCompetition/>}/>
       </Routes>
    </Router>
  );
}

export default App;
