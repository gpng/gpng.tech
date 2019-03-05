import React from 'react';

// components
import { Title } from './General';

const Contact = React.forwardRef((props, ref) => (
  <div className="root" ref={ref}>
    <Title label="Contact" />
    WIP
    <br />- github
    <br />- linkedin
    <br />- email
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

Contact.propTypes = {};

export default Contact;
