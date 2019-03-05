import React from 'react';
// components
import { Title } from './General';
import ProjectCard from './Projects/ProjectCard';

const Work = React.forwardRef((props, ref) => (
  <div className="root" ref={ref}>
    <Title label="Work" />
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
    <ProjectCard
      image="/static/images/ocbc.jpg"
      title="OCBC iBanking"
      skills={['C#', '.NET', 'Control-M']}
    >
      <p>Data collection on iBanking activities for fraud surveillance</p>
      <p>Generation of e-Statements for all customers</p>
    </ProjectCard>
    <ProjectCard
      image="/static/images/analytics.jpg"
      title="OCBC Application Analytics"
      skills={['AngularJS', 'Python', 'Flask', 'Alexa']}
    >
      <p>Internal application for analysis of all mobile application usage.</p>
      <p>Amazon&apos;s Alexa was used to control application navigation remotely.</p>
    </ProjectCard>
    <ProjectCard
      image="/static/images/pcomm.png"
      title="IBM PCOMM Automation with VBA"
      skills={['VBA', 'IBM PCOMM']}
    >
      <p>
        Macros to automate manual operational tasks by interfacing with IBMs PCOMM for data
        retrieval.
      </p>
    </ProjectCard>
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

Work.propTypes = {};

export default Work;
