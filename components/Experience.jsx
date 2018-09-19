import React from 'react';

// components
import { Title } from './General';

const Experience = React.forwardRef((props, ref) => (
  <div className="root" ref={ref}>
    <Title label="Experience" />
    WIP
    <br />
- smart
    <br />
- ocbc
    <br />
- add-venture
    <style jsx>
      {`
        .root {
          margin-top: 36px;
          text-align: center;
        }
      `}
    </style>
  </div>
));

Experience.propTypes = {};

export default Experience;
