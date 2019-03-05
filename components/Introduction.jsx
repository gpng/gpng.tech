import React from 'react';
// components
import { Email, Github, LinkedIn } from './Icons';
// constants
import { COLORS } from '../constants/styles';

const Introduction = () => (
  <div className="root">
    <div className="name">Gerald Png</div>
    <div className="contact">
      <a href="mailto:geraldpng@gmail.com">
        <Email />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/geraldpng/" rel="noreferrer noopener">
        <LinkedIn />
      </a>
      <a target="_blank" href="https://github.com/gpng" rel="noreferrer noopener">
        <Github />
      </a>
    </div>
    <div className="snippet">
      <p>
        Full-Stack Developer at&nbsp;
        <a href="https://smart.mit.edu/">SMART</a>.
      </p>
    </div>
    <style jsx>
      {`
        .root {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .name {
          font-size: 3em;
        }

        .contact {
          margin-top: 1em;
        }

        .contact a {
          margin: 0 0.5em;
        }

        .snippet {
          margin-top: 24px;
        }

        a {
          text-decoration: none;
          color: ${COLORS.SECONDARY};
        }

        p {
          text-align: center;
          margin-bottom: 8px;
        }

        .typewriter h1 {
          overflow: hidden;
          border-right: 0.15em solid orange;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: orange;
          }
        }
      `}
    </style>
  </div>
);

export default Introduction;
