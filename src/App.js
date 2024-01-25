import React from 'react'

import logo from './logo.svg';
import './App.css';
import Server_navbar from './components/the_home_page/Server_navbar';
import Dmlist from './components/the_home_page/Dmlist'
import TopNavHome from './components/the_home_page/TopNavHome'

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
          {/* <Dmlist />
          <TopNavHome /> */}
         
        
      </div>
    </>
  );
}

export default App;
