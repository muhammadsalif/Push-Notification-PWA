import React from "react";
import "./App.css";
import { initNotification } from "./services/FirebaseService";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
