import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
function App() {
  return (  
    <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
     </Switch>
    </Router>
  );
}

export default App;
