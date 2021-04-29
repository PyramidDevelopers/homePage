import './App.css';
import NewIntro from './Components/NewIntro/Intro';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import What from './Components/What/What';
import Show from './Components/Show/Show';
import Choose from './Components/Choose/Choose';
import OurTeam from './Components/OurTeam/OurTeam';
import ReachUs from './Components/ReachUs/ReachUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      {/* <h1>Pyramid Developers</h1>
      <h2>This is a trial</h2> */}
      <NewIntro />
      {/* <Intro /> */}
      {/* <Grid /> */}
      <About />
      <What />
      <Show />
      <Choose />
      <OurTeam />
      <ReachUs />
      <Footer />
    </div>
  );
}

export default App;
