import React from 'react';
import Project from './../components/ProjectShowcase';

import PathfindingVisualiserWebmDemo from './../assets/Pathfinding-Visualiser-Demo.webm';
import ReactMusicAppWebmDemo from './../assets/React-Music-Player.webm';
import ReactRealtimeChatAppWebmDemo from './../assets/React-Chat-App.webm';

import { ReactComponent as WaveSVG } from './../assets/singlewave2.svg';
import './../styles/Projects.scss';

const ProjectsInfo = [
  {
    title: 'React Music Player',
    imgSrc: ReactMusicAppWebmDemo,
    altText: 'Music player app demo webm',
    desc: 'A music player app that plays a selection of songs using the javascript Audio contructor. Responsive and able to handle low user download speeds with a nice sliding UI design.',
    srcCodeLink: 'https://github.com/Nims93/react-music-player',
    liveLink:
      'https://615504cc4d11864b80b8bc91--gallant-ride-7ea3b5.netlify.app/',
  },
  {
    title: 'React Realtime Chat App',
    imgSrc: ReactRealtimeChatAppWebmDemo,
    altText: 'React Realtime Chat App webm',
    desc: 'A Realtime chat app made with react and firebase to handle the messages database on the backend.',
    srcCodeLink: 'https://github.com/Nims93/react-realtime-chat-app',
    liveLink: 'https://realtime-react-chat-app.firebaseapp.com/',
  },
  {
    title: 'Pathinding Visualiser',
    imgSrc: PathfindingVisualiserWebmDemo,
    altText: 'Pathfinding viualiser demo webm',
    desc: 'An app that visualises pathfinding and maze generation algorithms. Create a maze of walls with your mouse clicks / drag across cells or using one of the maze generation algorithms. Then use a pathfinding algorithm to find a path (if one exists) from the start node to the end node.',
    srcCodeLink: 'https://github.com/Nims93/Pathfinding-Visualiser',
    liveLink: 'https://nims93.github.io/Pathfinding-Visualiser/',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-internal-wrapper">
        <h2>Projects</h2>
        <Project
          title={ProjectsInfo[0].title}
          imgSrc={ProjectsInfo[0].imgSrc}
          altText={ProjectsInfo[0].altText}
          desc={ProjectsInfo[0].desc}
          srcCodeLink={ProjectsInfo[0].srcCodeLink}
          liveLink={ProjectsInfo[0].liveLink}
        />
        <Project
          title={ProjectsInfo[1].title}
          imgSrc={ProjectsInfo[1].imgSrc}
          altText={ProjectsInfo[1].altText}
          desc={ProjectsInfo[1].desc}
          srcCodeLink={ProjectsInfo[1].srcCodeLink}
          liveLink={ProjectsInfo[1].liveLink}
        />
        <Project
          title={ProjectsInfo[2].title}
          imgSrc={ProjectsInfo[2].imgSrc}
          altText={ProjectsInfo[2].altText}
          desc={ProjectsInfo[2].desc}
          srcCodeLink={ProjectsInfo[2].srcCodeLink}
          liveLink={ProjectsInfo[2].liveLink}
        />
      </div>
      <div className="wave-container">
        <WaveSVG />
      </div>
    </section>
  );
};

export default Projects;
