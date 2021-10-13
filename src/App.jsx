import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
