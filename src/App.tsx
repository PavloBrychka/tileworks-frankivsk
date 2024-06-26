import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HeaderPage from "./components/header/HeaderPage";
import MenuPage from "./components/menu/MenuPage";

import PortfolioPage from "./components/portfolio/PortfolioPage";
// import SliderPage from "./components/slider/SliderPage";
import NotFoundPage from "./components/notfound/NotFoundPage";
import Footer from '../src/components/footer/footer';
// import './global-styles.css';
// import './App.css';
import InfoPage from "./components/info/InfoPage";

const App = () => {
  return (
    <div id="app">
      <Router>
        <div id="hero">
    

           <MenuPage/>
           
           <section id="mainpage" >
           <HeaderPage />
            </section>
           <section id="information" >
              <InfoPage/>
            </section>
            <section id="portfolio">
              <PortfolioPage/>
            </section>
            <section id="phone" >
              <Footer/>
            </section>
         
          
         
          {/* <PortfolioPage/> */}
        </div>
        
      </Router>
    </div>
  );
}

export default App;
