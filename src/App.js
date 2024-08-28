import './App.css';
import Header from './Components/Header/Header'
import NewArrivalandGiftNecklaces from './Components/NewArrivalandGiftNecklaces/NewArrivalandGiftNecklaces';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className='supper-app'>
      <div className="main-app">
      <Header/>
      <Slider/>
      <NewArrivalandGiftNecklaces/>
      </div>
    </div>
  );
}

export default App;
