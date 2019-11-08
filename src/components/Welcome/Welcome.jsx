import './style.scss';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReactLogo from 'assets/images/react.svg';

const Welcome = () => (
  <Jumbotron styleName="welcome-splash">
    <h1>
      <img alt="React" src={ReactLogo} styleName="react-logo" />
      React Starter
    </h1>
    <div styleName="get-started">
      Remove <code>components/Welcome</code> to begin working!
    </div>
  </Jumbotron>
);

export default Welcome;
