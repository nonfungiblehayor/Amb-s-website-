import Header from './components/header';
import Subheader from './components/sub-header';
import Service from './components/service';
import Pricing from './components/pricing';
import Request from './components/request';
import About from './components/about';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
import Quote from './components/quote';
import Menu from './components/menu';
import { useState } from 'react';
import style from './App.module.scss';

function App() {
  const [modal, modalControl] = useState(false);
  const [menu, menuControl] = useState(false);

  const  toggleModal = () => {
    modalControl(!modal);
    document.body.style.overflow = 'hidden'; 
    if(menu === true) {
      toggleMenu()
    }
  }

  const toggleModal2 = () => {
    if(modal === true) {
      modalControl(!modal);
      document.body.style.overflowY = 'scroll';
    }
  }

  const toggleMenu = () => {
    menuControl(!menu);
    document.body.style.overflow = 'hidden';
    if(modal === true) {
      toggleModal()
    }
  }

  const toggleMenu2 = () => {
    if(menu === true) {
      menuControl(!menu)
      document.body.style.overflowY = 'scroll';
    }
}
  return ( <>
    <div className={style.App}>   
      <Header showModal={toggleModal} showMenu={toggleMenu}/>   
   {menu ? <Menu  showModal={toggleModal} hideMenu={toggleMenu} hideMenu2={toggleMenu2} /> : ''}  
  {modal ?  <Quote hideModal={toggleModal2}/>  : ''}      
       <Subheader showModal={toggleModal}/>  
     <Service />
       <Pricing  showModal={toggleModal}/>
      <Request showModal={toggleModal}/>
       <About />
      <Newsletter />
  <Footer />
    </div> 
    </>
  );
}

export default App;
