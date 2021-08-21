// import './App.css';
import Home from './shared/components/Navigation/Nav'
import NavTab from './Components/Quick-search/quickSearch'
import Search from './Components/Search/search'
import './assets/travel.css'
import Footer from './Components/Footer/Footer'
import Carousal from './shared/components/Carousel/carousel'
import Destinations from './shared/components/Destinations/destinations'
function App() {
  return (
    <div>
      <header>
        <Home/>
        <NavTab></NavTab>
      </header>
      <main>
        <Carousal/>
        <Destinations/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
