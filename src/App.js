import './App.css';
import Countdown from './components/Countdown';
import Faqs from './components/Faqs';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import SecReady from './components/SecReady';
import SocialFooter from './components/SocialFooter';
import Team from './components/Team';
import VideoSec from './components/VideoSec';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <SecReady />
      <Countdown />
      <Features />
      <SocialFooter />
      <VideoSec />
      <Faqs />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
