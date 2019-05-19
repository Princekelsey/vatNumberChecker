import React from "react";
import "./App.css";
import VatRecord from "./components/VatRecord";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <VatRecord />
      </div>
    </div>
  );
}

export default App;
