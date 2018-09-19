import React from 'react';
import App, { Container } from 'next/app';

import basicCSS from '../stylesheets/basic';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
        <style jsx>
          {`
            .app-root {
              background: black;
              height: 100vh;
              width: 100vw;
            }
          `}
        </style>
        <style jsx global>
          {basicCSS}
        </style>
      </Container>
    );
  }
}

export default MyApp;
