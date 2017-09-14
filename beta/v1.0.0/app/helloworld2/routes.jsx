import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Main from './containers/Main';
// import Qwerty from './containers/Qwerty';
// import SSE from './containers/SSE';
import about from './containers/About';
import service from './containers/Service';
import gallery from './containers/Gallery';
import contact from './containers/Contact';

export default (store) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(store);
  }
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Main} title="Home" />
      <Route path="about" component={about} title="About" />
      <Route path="service" component={service} title="Service" />
      <Route path="gallery" component={gallery} title="Gallery" />
      <Route path="contact" component={contact} title="Contact" />
    </Route>
    );
};
