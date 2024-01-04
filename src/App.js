import React from 'react'

import logo from './logo.svg';
import './App.css';
import Server_navbar from './components/Server_navbar';
import Dmlist from './components/Dmlist'
function App() {
  return (
    <>
      <div className='flex'>
        <Server_navbar />
        <Dmlist />
      </div>
    </>
  );
}

export default App;
