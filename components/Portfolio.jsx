import React from 'react';
// components
import { Title } from './General';
import ProjectCard from './Projects/ProjectCard';

const Portfolio = React.forwardRef((props, ref) => (
  <div className="root" ref={ref}>
    <Title label="Projects" />
    <ProjectCard
      image="/static/images/escape.jpg"
      title="Escape"
      skills={['JavaScript ES6', 'HTML5', 'CSS3', 'ReactJS', 'MapBox', 'Deck.gl']}
      site="https://greatescape.co"
    >
      <p>Escape is an interface designed to help you decide your next holiday destination.</p>
      <p>
        We intend to simplify this process through a series of data visualisations that help the
        user navigate this information and plan their next trip within few minutes.
      </p>
    </ProjectCard>
    <br />- ocbc inb
    <br />- alexa/angular/python app analytics
    <br />- simple ftp
    <br />- vba/pcomm automation
    <style jsx>
      {`
        .root {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
        }
      `}
    </style>
  </div>
));

Portfolio.propTypes = {};

export default Portfolio;
