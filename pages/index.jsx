import React, { Component } from 'react';

// components
import { Header, Introduction, Work, Projects } from '../components';

class Index extends Component {
  constructor(props) {
    super(props);
    this.workRef = React.createRef();
    this.projectsRef = React.createRef();
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
      <div className="container index-root">
        <Header onClick={this.handleClick} />
        <Introduction />
        <Work ref={this.workRef} />
        <Projects ref={this.projectsRef} />
        <style jsx>{`
          .index-root {
            padding-bottom: 2em;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
