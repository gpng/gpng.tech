import React from 'react';
import PropTypes from 'prop-types';
// components
import { Github } from '../Icons';
// constants
import { COLORS } from '../../constants/styles';

const openLink = link => {
  window.open(link, '_blank');
};

const ProjectCard = ({ image, children, title, skills, site, source }) => (
  <div className="project-card-root">
    <div className="image-container">
      <img src={image} alt="project-cover" />
    </div>
    <div className="content">
      <div className="content-padding">
        <div className="title">{title}</div>
        <div className="description">{children}</div>
        <div className="skills">
          {skills.map(x => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <div className="links">
          {site && (
            <button type="button" className="button-site" onClick={() => openLink(site)}>
              Visit Site
            </button>
          )}
          {source && (
            <button type="button" className="button-source" onClick={() => openLink(source)}>
              <Github height="0.75em" />
              &nbsp;View Source
            </button>
          )}
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .project-card-root {
          position: relative;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 50px 100px rgba(50, 50, 93, 0.05), 0 15px 35px rgba(50, 50, 93, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          background: #ffffff;
          display: flex;
          justify-content: flex-end;
          border-radius: 0.2em;
          margin-top: 1em;
        }

        .image-container {
          display: none;
          z-index: 1;
          position: absolute;
          left: 0;
          width: 30%;
          height: 100%;
          overflow: hidden;
        }

        .image-container > img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .content {
          z-index: 2;
          position: relative;
          width: 100%;
        }

        .content-padding {
          padding: 2.5em;
        }

        .title {
          font-weight: 700;
          font-size: 1.5em;
          margin-bottom: 1em;
        }

        .description {
          margin-bottom: 1em;
        }

        .skills span {
          display: inline-block;
          white-space: nowrap;
          border: 2px solid ${COLORS.DARK};
          border-radius: 0.3em;
          padding: 0.2em 0.5em;
          margin: 0 0.3em 0.3em 0;
        }

        .skills {
          margin-bottom: 1em;
        }

        .links button {
          border-radius: 0.2em;
          padding: 0.5em 1em;
          border: none;
          box-shadow: 0 1px 2px #999;
          cursor: pointer;
        }

        .button-site {
          color: ${COLORS.LIGHT};
          background: ${COLORS.DARK};
          margin-right: 1em;
        }

        .button-source {
          background: transparent;
          color: ${COLORS.DARK};
        }

        @media (min-width: 768px) {
          .image-container {
            display: block;
          }

          .content {
            width: 70%;
          }
        }
      `}
    </style>
  </div>
);

ProjectCard.defaultProps = {
  site: null,
  source: null,
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  site: PropTypes.string,
  source: PropTypes.string,
};

export default ProjectCard;
