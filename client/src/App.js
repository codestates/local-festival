import React from "react";
import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import Pickpage from "../src/pages/Pickpage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  // render() {
  return (
    <div className="App">
      <Header />
      {/* <Pickpage /> */}
      <Routes>
        <Route exact path="/" element={<Mainpage />}></Route>
        <Route exact path="/Pickpage" element={<Pickpage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
  // }
}

export default App;
