import React from "react";
import logo from "./logo.jpg";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://newcastlebeach.org/images/github-logo-17.png" className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
  );
}

export default App;
