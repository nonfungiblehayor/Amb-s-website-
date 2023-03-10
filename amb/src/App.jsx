import Header from './components/header';
import Subheader from './components/sub-header';
import Service from './components/service';
import Pricing from './components/pricing';
import Request from './components/request';
import About from './components/about';
import Newsletter from './components/newsletter';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />   
      <Subheader />  
      <Service />
      <Pricing />
      <Request />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
