import React from 'react';
import PropTypes from 'prop-types';

// constants
import { COLORS } from '../constants/styles';

const Header = ({ onClick }) => (
  <div className="root">
    <button type="button" className="button" onClick={() => onClick('work')}>
      WORK
    </button>
    <button type="button" className="button" onClick={() => onClick('projects')}>
      PROJECTS
    </button>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          padding-top: 24px;
          padding-bottom: 24px;
        }

        .button {
          border: none;
          background: none;
          cursor: pointer;

          font-size: 1.2em;
          color: ${COLORS.DARK};
          font-weight: 700;
        }

        .button:hover {
          color: ${COLORS.SECONDARY};
        }

        .button:focus {
          outline: none;
        }

        @media (max-width: 576px) {
          .button {
            font-size: 0.8em;
          }
        }
      `}
    </style>
  </div>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
