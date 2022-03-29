import './App.css';
import Countdown from './components/Countdown';
import Faqs from './components/Faqs';
import Features from './components/Features';
import InfoCards from './components/InfoCards';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Socials from './components/Socials';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Socials />
      <Slider />
      <InfoCards />
      <Countdown />
      <Features />
      <Faqs />
    </div>
  );
}

export default App;
