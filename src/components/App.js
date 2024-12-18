import { Provider } from 'react-redux'
import Store from './Store'
import DisplayInfo from './DisplayInfo'

import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <h1>User Information</h1>
        <Provider store={Store}>
          <DisplayInfo />
        </Provider>
    </div>
  )
}

export default App
