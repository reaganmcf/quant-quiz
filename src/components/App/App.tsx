import React, { useState } from 'react';
import { Provider } from 'react-redux'
import './App.css';

import { createAppStore } from './../../store'

const appStore = createAppStore()

class App extends React.Component {
  public render() {
    return (
      <Provider store={appStore}>
        <header>Hello World</header>
      </Provider>
    )
  } 
}


export default App;
