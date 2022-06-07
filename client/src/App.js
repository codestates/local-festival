import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import Pickpage from "../src/pages/Pickpage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detailviewpage from "./pages/Detailviewpage";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    // isLogin ? setIsLogin(false) : setIsLogin(true);
    setIsLogin(!isLogin); //* 더 간단!
  };

  return (
    <Wrapper>
      <Header loginHandler={loginHandler} isLogin={isLogin} />
      <Routes>
        <Route exact path="/" element={<Mainpage />}></Route>
        <Route exact path="/Pickpage" element={<Pickpage />}></Route>
        <Route
          exact
          path="/Detailviewpage"
          element={<Detailviewpage />}
        ></Route>
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
