import './HeaderPage.css';
import React from 'react';
import photo from '../../../public/assets/headerfoto.jpg'
import InfoPage from '../info/InfoPage';
import PortfolioPage from '../portfolio/PortfolioPage';
import MenuPage from '../menu/MenuPage';
import Footer from '../footer/footer';

const HeaderPage = () => {


  return (
    <div className='header-main'>
      
      <div className='mainImage' style={{backgroundImage: `url('/assets/mainimage.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh'}}>
            {/* Вміст вашого компонента */}
        </div>
      
        
        
        {/* <InfoPage/> */}
        
    </div>
  );
}

export default HeaderPage;