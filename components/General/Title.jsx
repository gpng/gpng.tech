import React from 'react';
import PropTypes from 'prop-types';

// constants
import { COLORS } from '../../constants/styles';

const Title = ({ label }) => (
  <div className="root">
    <span className="label">
      {label}
    </span>

    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;

          margin-top: 24px;
          margin-bottom: 24px;

          font-size: 2em;
          font-weight: 700;
        }

        .label {
          border-bottom: 1px solid ${COLORS.SECONDARY};
        }
      `}
    </style>
  </div>
);

Title.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Title;
