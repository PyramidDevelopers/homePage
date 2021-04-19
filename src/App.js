import Intro from './Components/Intro';
import './App.css';
import About from './Components/About';
import What from './Components/What';
import Show from './Components/Show';

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
