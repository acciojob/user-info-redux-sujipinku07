import { Provider } from 'react-redux'
import store from './Store'
import DisplayInfo from './DisplayInfo'

import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <h1>User Information</h1>
        <Provider store={store}>
          <DisplayInfo />
        </Provider>
    </div>
  )
}

export default App
