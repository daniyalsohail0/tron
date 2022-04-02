import './App.css';
import Faqs from './components/Faqs';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Slider from './components/Slider';
import SocialFooter from './components/SocialFooter';
import Team from './components/Team';
import VideoSec from './components/VideoSec';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <VideoSec />
      <Features />
      <Slider />
      <Faqs />
      <Team />
      <Partners />
      <SocialFooter />
    </div>
  );
}

export default App;
