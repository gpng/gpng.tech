import React from 'react';
// components
import { Title } from './General';
import ProjectCard from './Projects/ProjectCard';

const Projects = React.forwardRef((props, ref) => (
  <div className="root" ref={ref}>
    <Title label="Personal Projects" />
    <ProjectCard
      image="/static/images/ftp.png"
      title="Simple FTP"
      skills={['Go', 'Javascript ES6', 'ReactJS']}
    >
      <p>
        The idea behind this software was to be able to distribute useful software within a
        corporate network, along with installation guides for installing without internet access or
        proxy configuration for corporate firewalls
      </p>
      <p>
        A FTP server written in Go which allows users to upload and distribute software and
        installation guides behind air-gapped systems.
      </p>
      <p>
        Frontend is a hosted website written with React, which renders Markdown installation guides
        for all software uploaded
      </p>
    </ProjectCard>
    <ProjectCard
      image="/static/images/stocks.jpg"
      title="Data API for Thai Stocks"
      skills={['NodeJS']}
      site="https://github.com/gpng/buffet-stock-valuation-thailand"
    >
      <p>Simple API which scrapes Morningstar for Thai stocks data.</p>
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

Projects.propTypes = {};

export default Projects;
