import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/App.scss';
import { ReactComponent as LayeredWaves1SVG } from './assets/layered-waves1.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Projects />
      <div className="spacer layered-waves1">
        <LayeredWaves1SVG />
      </div>
      <Skills />
    </div>
  );
}

export default App;
