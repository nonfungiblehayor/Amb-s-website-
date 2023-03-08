import style from './App.module.scss';
import Header from './components/header';
import Subheader from './components/sub-header';
import Service from './components/service';

function App() {
  return (
    <div className="App">
      <Header />   
      <Subheader />  
      <Service />
    </div>
  );
}

export default App;
