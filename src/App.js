import { styled } from "styled-components";
import "./App.css";

import MainMenu from "./components/main-menu/MainMenu";
import ChoiseCategory from "./components/change-category/ChoiseCategory";
import Header from "./components/header/Header";
import DemonsMainPage from "./components/Demons-page/main-page/DemonsMainPage";
import DemonsDocumentation from "./components/Demons-page/documentation/DemonsDocumentation";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./components/modal/Modal";
import FirstDemon from "./components/Demons-page/first-demon/FirstDemon";
import UpperMoons from "./components/Demons-page/upper-moons/UpperMoons";
import LowerMoons from "./components/Demons-page/lower-moons/LowerMoons";
import OtherDemons from "./components/Demons-page/other-demons/OtherDemons";
import SlayersMainPage from "./components/slayers-pages/slayers-main-page/SlayersMainPage";
import FirstSlayer from "./components/slayers-pages/first-slayer/FirstSlayer";
import Hashira from "./components/slayers-pages/hashira/Hashira";
import TanjiroTeam from "./components/slayers-pages/Tanjiro-team/TanjiroTeam";
import OtherSlayers from "./components/slayers-pages/other-slayers/OtherSlayers";
import SlayersDocumentation from "./components/slayers-pages/documentation/SlayersDocumentation";

function App() {

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function changeState() {
    navigate('choise-category');
  }
  const navigateMainHandler = () => {
    navigate("/");
  };

  function showAndCloseModalHandler() {
      setShowModal((prev) => !prev);
  }
  return (
    <>
    {showModal && <Modal closeModalHandler={showAndCloseModalHandler}/>}
      <div className="App">

        <Header isVisible={true} changeState={navigateMainHandler} showModal={showAndCloseModalHandler} />
        <Container>
      
      
      <Routes>
        <Route path="/" element={<MainMenu changeState={changeState} />} />

        <Route path="choise-category" element={<ChoiseCategory />} />

        {/* about demons */}
        <Route path="demons-main-page" element={<DemonsMainPage />}/>
        <Route path="/first-demon" element={<FirstDemon/>}/>
        <Route path="/upper-moons" element={<UpperMoons/>}/>
        <Route path="/lower-moons" element={<LowerMoons/>}/>
        <Route path="/other-demons" element={<OtherDemons/>}/>
        <Route path="/demons-documentation" element={<DemonsDocumentation/>}/>

        {/* about slayers */}
        <Route path="slayers-main-page" element={<SlayersMainPage />}/>
        <Route path="/first-slayer" element={<FirstSlayer/>}/>
        <Route path="/hashira" element={<Hashira/>}/>
        <Route path="/Tanjiro-team" element={<TanjiroTeam/>}/>
        <Route path="/other-slayers" element={<OtherSlayers/>}/>
        <Route path="/slayers-documentation" element={<SlayersDocumentation/>}/>
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
