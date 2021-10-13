import React from 'react';

const Project = ({ title, imgSrc, altText, desc, srcCodeLink, liveLink }) => {
  return (
    <div className="project">
      <a
        className="title-live-link"
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
      </a>
      <video controls={false} autoPlay loop>
        <source src={imgSrc} type="video/webm" />
        <p>
          {altText}. <a href={imgSrc}>Link to video</a>
        </p>
      </video>
      <a
        className="live-link"
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        See Live Project Here!
      </a>
      <a
        className="sourcecode-link"
        href={srcCodeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code on Github!
      </a>
      <p className="description">{desc}</p>
    </div>
  );
};

export default Project;
