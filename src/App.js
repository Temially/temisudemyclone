import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home'
import Instructor from './instructor'
import Student from './Student'
import Navigation from './Navbar'
import {Container, Navbar, Row, Col} from 'react-bootstrap';
import { BrowserRouter, Router, Switch, Route, Link, NavLink } from 'react-router-dom';
function App() {
  return(


    <BrowserRouter>
    
   <div>

    <Navigation/>

    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/student' component={Student}/>
      <Route path='/instructor' component={Instructor}/>
    </Switch>
    
    </div>

    </BrowserRouter>
  
    
  );
  
}


export default App;

