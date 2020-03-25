import React from "react";
import "./App.css";
import Header from "./app/Header";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <header className="App-header">Covid-19 Information</header>
    <Header />
  </div>
);

export default App;
