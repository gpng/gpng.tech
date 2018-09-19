import React, { Component } from 'react';

// components
import {
  Contact, Experience, Header, Introduction, Portfolio,
} from '../components';

class Index extends Component {
  constructor(props) {
    super(props);
    this.portfolioRef = React.createRef();
    this.experienceRef = React.createRef();
    this.contactRef = React.createRef();
    // bindings
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const { [`${name}Ref`]: ref } = this;
    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <div className="container">
        <Header onClick={this.handleClick} />
        <Introduction />
        <Portfolio ref={this.portfolioRef} />
        <Experience ref={this.experienceRef} />
        <Contact ref={this.contactRef} />
      </div>
    );
  }
}

export default Index;
