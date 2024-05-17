import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './MenuPage.css'; // Стилі можна додати у відповідний файл CSS

const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menuName: React.SetStateAction<string>) => {
    setActiveMenu(menuName);
  };

  return (
    <div className='horizontal-menu-main'>

    
    <nav className="horizontal-menu">
       
      <ul>
        <li>
          <Link
            activeClass="active"
            to="information"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleMenuClick('information')}
          >
            Інформація
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleMenuClick('portfolio')}
          >
            Портфоліо
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="phone"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleMenuClick('phone')}
          >
            Телефон
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="prices"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleMenuClick('prices')}
          >
            Ціни
          </Link>
        </li>
      </ul>
      <div className="logo">
        <img src="/assets/logo.png" alt="" />
      </div>
    </nav>
    </div>
  );
};

export default MenuPage;
