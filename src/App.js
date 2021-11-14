import React from 'react';
import './assets/styles/tailwind.css';
import Sidebar from './components/layout/Sidebar';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <Sidebar>
        <Dashboard/>
      </Sidebar>
    </>
  );
}

export default App;
