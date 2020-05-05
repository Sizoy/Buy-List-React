import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>CSS DINER SHOPPING LIST</h1>
        <p>Let's go to the mall!</p>
      </header>
      <div className="main">
        <List />
      </div>
      <div className="footer">Bon appetit:{")"}</div>
    </div>
  );
}

export default App;
