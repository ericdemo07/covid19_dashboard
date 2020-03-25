import React from "react";
import "./App.css";
import Header from "./app/Header";
import Body from "./app/Body";
import Footer from "./app/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
