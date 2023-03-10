import React from 'react';
import logo from './images/logo512.png';

function App() {
  return (
    <div className="main-container">
      <div className="intro-text">
        <img src={logo} alt="react-logo" />
        <h1>Hello,</h1>
      </div>
      <h2>This is a <b>sample react web app</b> running in Azure Static Apps and working as a <i>serveless computing service</i>.</h2>
      <p>If you got interested in trying it out, check quickstart guide on
        <a href='https://learn.microsoft.com/en-us/azure/app-service/quickstart-html'>Learn Microsoft</a>
      </p>
      <div className="body-container">
        <br />
        <p>The React Web app sample was created based on
          <a href='https://github.com/staticwebdev/react-basic.git'>https://github.com/staticwebdev/react-basic.git.</a>
        </p>
      </div>
    </div>
  );
}

export default App;
