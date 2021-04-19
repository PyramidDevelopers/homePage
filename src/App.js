import './App.css';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import What from './Components/What/What';
import Show from './Components/Show/Show';

function App() {
  return (
    <div className='app'>
      {/* <h1>Pyramid Developers</h1>
      <h2>This is a trial</h2> */}
      <Intro />
      <About />
      <What />
      <Show />
    </div>
  );
}

export default App;
