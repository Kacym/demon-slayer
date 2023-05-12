import { styled } from "styled-components";
import "./App.css";
import { useState } from "react";

import MainMenu from "./components/main-menu/MainMenu";
import ChoiseCategory from "./components/change-category/ChoiseCategory";
import Header from "./components/header/Header";
import DemonsMainPage from "./components/Demons-page/main-page/DemonsMainPage";
import DemonsDocumentation from "./components/Demons-page/documentation/DemonsDocumentation";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function changeState() {
    navigate('choise-category');
  }
  const navigateMainHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className="App">
        <Header isVisible={true} changeState={navigateMainHandler} />
        <Container>
      
      
      <Routes>
        <Route path="/" element={<MainMenu changeState={changeState} />} />
        <Route
          path="demons-main-page"
          element={<DemonsMainPage />}
        />
        <Route path="choise-category" element={<ChoiseCategory />} />
      </Routes>
      </Container>
      </div>
    </>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default App;
