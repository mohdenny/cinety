import React from 'react'
import './assets/styles/tailwind.css'
import Sidebar from './components/layout/Sidebar'
import Landing from './components/layout/Landing'
import Dashboard from './components/dashboard/Dashboard'

// redux
import { Provider } from "react-redux"
import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Sidebar>
          <Dashboard/>
        </Sidebar>
      </>
    </Provider>
  );
}

export default App;
