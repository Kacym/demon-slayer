import React from 'react'

import { Routes, Route } from 'react-router-dom';

import MainMenu from "../components/main-menu/MainMenu";
import ChoiseCategory from "../components/change-category/ChoiseCategory";
import DemonsMainPage from "../components/Demons-page/main-page/DemonsMainPage";
import DemonsDocumentation from "../components/Demons-page/documentation/DemonsDocumentation";


import FirstDemon from "../components/Demons-page/first-demon/FirstDemon";
import UpperMoons from "../components/Demons-page/upper-moons/UpperMoons";
import LowerMoons from "../components/Demons-page/lower-moons/LowerMoons";
import OtherDemons from "../components/Demons-page/other-demons/OtherDemons";
import SlayersMainPage from "../components/slayers-pages/slayers-main-page/SlayersMainPage";
import FirstSlayer from "../components/slayers-pages/first-slayer/FirstSlayer";
import Hashira from "../components/slayers-pages/hashira/Hashira";
import TanjiroTeam from "../components/slayers-pages/Tanjiro-team/TanjiroTeam";
import OtherSlayers from "../components/slayers-pages/other-slayers/OtherSlayers";
import SlayersDocumentation from "../components/slayers-pages/documentation/SlayersDocumentation";
import Muzan from "../components/Demons-page/Muzan";
import Kokushibo from "../components/Demons-page/Kokushibo";


const AppRoutes = ( {changeState} ) => {

  return (
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

    <Route path="/Kibutzudji-Muzan" element={<Muzan/>}/>
    <Route path="/Kokushibo" element={<Kokushibo/>}/>

    {/* about slayers */}
    <Route path="slayers-main-page" element={<SlayersMainPage />}/>
    <Route path="/first-slayer" element={<FirstSlayer/>}/>
    <Route path="/hashira" element={<Hashira/>}/>
    <Route path="/Tanjiro-team" element={<TanjiroTeam/>}/>
    <Route path="/other-slayers" element={<OtherSlayers/>}/>
    <Route path="/slayers-documentation" element={<SlayersDocumentation/>}/>
  </Routes>
  )
}

export default AppRoutes