import css from 'styled-jsx/css'; // eslint-disable-line import/no-extraneous-dependencies
import { COLORS } from '../constants/styles';
import 'normalize.css';

const basic = css.global`
  @import url(//fonts.googleapis.com/css?family=Open+Sans);

  html {
    font-size: 16px;
  }

  @media (max-width: 576) {
    html {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${COLORS.DARK};
    background: ${COLORS.LIGHT};
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export default basic;
