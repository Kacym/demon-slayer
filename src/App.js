import { styled } from 'styled-components';
import './App.css';
import MainMenu from './components/main-menu/MainMenu';
import { useState } from 'react'
import ChangeCategory from './components/change-category/ChoiseCategory';
import Header from './components/header/Header';


function App() {
  
  const [showComponents, setShowComponents] = useState(false);

  function changeState() {
    setShowComponents((prev) => !prev);
  }

  return (
    <div className="App">
      
      <Header isVisible={showComponents} changeState={changeState}/>
      <Container>
        {
        showComponents ? <ChangeCategory /> : <MainMenu changeState = {changeState}/>
        }

      </Container>
      
    </div>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default App;
