import { useEffect, useRef, useState } from 'react';
import KUTE from 'kute.js';
import { ReactComponent as CssSVG } from './../assets/icons8-css3.svg';
import { ReactComponent as FirebaseSVG } from './../assets/icons8-firebase.svg';
import { ReactComponent as GitSVG } from './../assets/icons8-git.svg';
import { ReactComponent as GithubSVG } from './../assets/icons8-github.svg';
import { ReactComponent as JsSVG } from './../assets/icons8-javascript.svg';
import { ReactComponent as PythonSVG } from './../assets/icons8-python.svg';
import { ReactComponent as SassSVG } from './../assets/icons8-sass.svg';
import { ReactComponent as HtmlSVG } from './../assets/svgrepo-html5.svg';
import { ReactComponent as ReactSVG } from './../assets/svgrepo-react.svg';
import { ReactComponent as BlobSVG } from './../assets/dual-haikei-blobs.svg';
import './../styles/Skills.scss';

const Skills = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const kuteRef = useRef(null);
  const isAnimationOnScreenRef = useRef(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    if (windowWidth >= 1050 && !isAnimationOnScreenRef.current) {
      //if window width is greather than 1050px and animation hasn't already been created
      isAnimationOnScreenRef.current = true;
      kuteRef.current = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { repeat: 999, duration: 3000, yoyo: true }
      ).start();
    } else if (windowWidth < 1050 && isAnimationOnScreenRef.current) {
      //if window width is less than 1050px and animation has been created
      isAnimationOnScreenRef.current = false;
      kuteRef.current.stop();
    }

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return (
    <section id="skills">
      <div className="skills-section-wrapper">
        <h2>Skills</h2>
        <div className="skills-container">
          {windowWidth >= 1050 ? <BlobSVG /> : null}
          <div className="skills-group">
            <div className="skill" id="html">
              <HtmlSVG />
              <p>HTML5</p>
            </div>
          </div>
          <div className="skills-group">
            <div className="skill" id="github">
              <GithubSVG />
              <p>GitHub</p>
            </div>
            <div className="skill" id="git">
              <GitSVG />
              <p>Git</p>
            </div>
          </div>
          <div className="skills-group">
            <div className="skill" id="javascript">
              <JsSVG />
              <p>Javascript</p>
            </div>
            <div className="skill" id="react">
              <ReactSVG />
              <p>React</p>
            </div>
            <div className="skill" id="python">
              <PythonSVG />
              <p>Python</p>
            </div>
          </div>
          <div className="skills-group">
            <div className="skill" id="css">
              <CssSVG />
              <p>Css</p>
            </div>
            <div className="skill" id="sass">
              <SassSVG />
              <p>Sass</p>
            </div>
          </div>
          <div className="skills-group">
            <div className="skill" id="firebase">
              <FirebaseSVG />
              <p>Firestore RTDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
