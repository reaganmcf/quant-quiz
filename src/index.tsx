import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';

import App from './components/App/App';

import { createAppStore } from './store'
const appStore = createAppStore()

const rootElement = document.getElementById("root")

render(
  <Provider store={appStore}>
    <App/>
  </Provider>,
  rootElement
)

