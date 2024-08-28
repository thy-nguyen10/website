import './App.css';
import Banner from './Components/Banner/Banner';
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
      <Banner/>
      </div>
    </div>
  );
}

export default App;
