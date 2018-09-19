import React from 'react';

// constants
import { COLORS } from '../constants/styles';

const Introduction = () => (
  <div className="root">
    <div className="name">
      {'Gerald Png'}
    </div>
    <div className="snippet">
      <p>
        I am a full stack developer at
        {' '}
        <a href="https://smart.mit.edu/">
SMART
        </a>
.
      </p>
      <p>
My passion is to build useful and interesting projects that will be used by others.
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
      `}
    </style>
  </div>
);

export default Introduction;
