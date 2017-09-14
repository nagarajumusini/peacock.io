import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import '../css/reset.css';
import logo from '../img/main/logo.svg';


const App = ({children}) => {
  return (
    <div>
      <div className="ap-react-app main">
        <Helmet title="Home" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/service">service</Link>
      <Link to="/gallery">gallery</Link>
      <Link to="/contact">contact</Link>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
