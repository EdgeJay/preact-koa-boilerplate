import React from 'react';
import ReactDOM from 'react-dom';
import 'milligram/dist/milligram.css';
import App from './components/core/App';

const render = (Component) => {
  ReactDOM.render((
    <Component />
  ), document.getElementById('app-mount'));
};

render(App);

if (module.hot) {
  module.hot.accept('./components/core/App', () => render(App));
}

if (process.env.NODE_ENV === 'development') {
  require('preact/devtools'); // eslint-disable-line global-require
}
