import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
import TechSkills from'./components/TechSkills';
import SoftSkills from'./components/SoftSkills';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (  
    <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/tech-skills' exact component={TechSkills}/>
       <Route path='/sobre-mi' exact component={About}/>
       <Route path='/soft-skills' exact component={SoftSkills}/>
       <Route path='/proyectos' exact component={Projects}/>
       <Route path='/contacto' exact component={Contact}/>
     </Switch>
    </Router>
  );
}

export default App;
