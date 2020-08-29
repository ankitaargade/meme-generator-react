import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MemeGenerator from "./components/MemeGenerator";
import Header from "./components/Header";
function App() {
  return (
    <div className="app-body" style={{ textAlign: "center" }}>
      <header className="app-header">
        <Header></Header>
      </header>
      <main className="app-main">
        <MemeGenerator></MemeGenerator>
      </main>
    </div>
  );
}

export default App;
