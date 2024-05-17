import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HeaderPage from "./components/header/HeaderPage";
import MenuPage from "./components/menu/MenuPage";

import PortfolioPage from "./components/portfolio/PortfolioPage";
// import SliderPage from "./components/slider/SliderPage";
import NotFoundPage from "./components/notfound/NotFoundPage";
import Footer from '../src/components/footer/footer';
import './global-styles.css';

const App = () => {
  return (
    <div id="app">
      <Router>
        <div id="hero">
          <Outlet/>
           <MenuPage/>
          <HeaderPage />
          
         
          {/* <PortfolioPage/> */}
        </div>
        
      </Router>
    </div>
  );
}

export default App;
