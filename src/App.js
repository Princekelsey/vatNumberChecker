import React from "react";
import "./App.css";
import VatRecord from "./components/VatRecord";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <VatRecord />
    </div>
  );
}

export default App;
