import { useState } from "react";
import NavBar from "./components/NavBar";
import "./assets/App.css";
import Form from "./components/Form";
import WheatherPanel from "./components/WheatherPanel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WheatherPanel />
    </div>
  );
}

export default App;
