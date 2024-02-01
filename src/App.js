import React from 'react'

import './App.css';
import Server_navbar from './components/the_home_page/Server_navbar';
import Dmlist from './components/the_home_page/Dmlist'


import MainAreaHome from './components/the_home_page/MainAreaHome';
function App() {
  return (
    <>
      <div className='flex flex-row '>
        <Server_navbar />
        <div className='flex flex-row '>
          <Dmlist />
          <MainAreaHome />
        </div>
      </div>
    </>
  );
}

export default App;
