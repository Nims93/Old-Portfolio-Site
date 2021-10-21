import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/App.scss';
import { ReactComponent as LayeredWaves1SVG } from './assets/layered-waves1.svg';
import { ReactComponent as LayeredWaves2SVG } from './assets/layered-waves2.svg';

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
      <div className="spacer layered-waves2">
        <LayeredWaves2SVG />
      </div>
      <Contact />
    </div>
  );
}

export default App;
