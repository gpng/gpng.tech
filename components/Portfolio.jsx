import React from 'react';

// components
import { Title } from './General';

const Portfolio = React.forwardRef((props, ref) => (
  <div className="root" ref={ref}>
    <Title label="Portfolio" />
    WIP
    <br />
- escape
    <br />
- ocbc inb
    <br />
- alexa/angular/python app analytics
    <br />
- simple ftp
    <br />
- vba/pcomm automation
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

Portfolio.propTypes = {};

export default Portfolio;
