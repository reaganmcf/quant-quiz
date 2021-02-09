import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './components/App';

import { createAppStore } from './store';

const appStore = createAppStore();
const rootElement = document.getElementById('root');

render(
  <Provider store={appStore}>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </head>
    <App />
  </Provider>,
  rootElement
);
