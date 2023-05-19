import { styled } from "styled-components";
import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";


import { useNavigate } from "react-router-dom";

import Modal from "./components/modal/Modal";
import AppRoutes from "./routes/Routes";
import { createPortal } from "react-dom";


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
    {showModal && 
    createPortal(
    <Modal closeModalHandler={showAndCloseModalHandler}/>,
    document.getElementById("modal")
    )}
      <div className="App">

        <Header isVisible={true} changeState={navigateMainHandler} showModal={showAndCloseModalHandler}/>
        <Container>
      
        <AppRoutes changeState={changeState}/>
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
