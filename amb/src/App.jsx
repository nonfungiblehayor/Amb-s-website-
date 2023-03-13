import Header from './components/header';
import Subheader from './components/sub-header';
import Service from './components/service';
import Pricing from './components/pricing';
import Request from './components/request';
import About from './components/about';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
import Quote from './components/quote';
import { useState } from 'react';

function App() {
  const [modal, modalControl] = useState(false);

  const  toggleModal = () => {
    modalControl(!modal);
    console.log('working')
  }
  return ( <>
  {modal ?  <Quote hideModal={toggleModal}/>  : console.log('werey')} 
    <div className="App">      
      <Header showModal={toggleModal}/>   
      <Subheader />  
      <Service />
      <Pricing />
      <Request />
      <About />
      <Newsletter />
      <Footer />
    </div>
    </>
  );
}

export default App;
