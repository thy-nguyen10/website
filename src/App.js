import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import NewArrivalandGiftNecklaces from './Components/NewArrivalandGiftNecklaces/NewArrivalandGiftNecklaces';
import Slider from './Components/Slider/Slider';
import UnderShop from './Components/UnderShop/UnderShop';

function App() {
  return (
    <div className='supper-app'>
      <div className="main-app">
      <Header/>
      <Slider/>
      <NewArrivalandGiftNecklaces/>
      <Banner/>
      <UnderShop/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
