import { browserHistory } from 'react-router';
import IsomorphicRelay from 'isomorphic-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

const data = JSON.parse(document.getElementById('preloadedData').textContent);

IsomorphicRelay.injectPreparedData(data);

const rootElement = document.getElementById('root');

function render() {
  const routes = require('./routes').default;

  ReactDOM.render(
    <IsomorphicRouter.Router routes={routes} history={browserHistory} />,
    rootElement
  );
}

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(rootElement);
      render();
    });
  });
}
