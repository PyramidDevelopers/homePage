import Intro from './Components/Intro';
import './App.css';
import About from './Components/About';


function App() {
  return (
    <div className='app'>
      {/* <h1>Pyramid Developers</h1>
      <h2>This is a trial</h2> */}
      <Intro />
      <About />
    </div>
  );
}

export default App;
