import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Homepage/Home';

function App() {
  return (  
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
