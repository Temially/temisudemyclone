import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

import { Navbar, Nav, Dropdown, NavItem,  Form, FormControl, Button} from 'react-bootstrap';

function Navigation() {
  return(
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" id="brand"><normal id="udemy">U</normal> Udemy</Navbar.Brand>
      <Dropdown>
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
      Categories
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
      <Dropdown.Item>Development</Dropdown.Item>
      <Dropdown.Item>Business</Dropdown.Item>
      <Dropdown.Item>Finance & Accounting</Dropdown.Item>
      <Dropdown.Item>IT & Software</Dropdown.Item>
      <Dropdown.Item>Design</Dropdown.Item>
      <Dropdown.Item>Marketing</Dropdown.Item>
      <Dropdown.Item>Lifestyle</Dropdown.Item>
      <Dropdown.Item>Photography</Dropdown.Item>
      <Dropdown.Item>Music</Dropdown.Item>
      <Dropdown.Item>Health & Fitness</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


  
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mt-2 ml-auto mt-lg-0">
          <NavLink className="d-inline p-2 bg-light text-dark" to="/">Home</NavLink>
          <NavLink className="d-inline p-2 bg-light text-dark" to="/student">Student</NavLink>
          <NavLink className="d-inline p-2 bg-light text-dark" to="/instructor">Instructor</NavLink>
          <NavLink className="d-inline p-2 bg-light text-dark" to="/instructor">Udemy For Business</NavLink>
          <NavLink className="d-inline p-2 bg-light text-dark" to="/instructor">Teach on Udemy</NavLink>
        </Nav>
       
        <Form inline className="mr-auto mt-2 ml-auto mt-lg-0" id="form">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-danger">Search</Button>
      </Form>
      <Button variant="outline-secondary" id="sec">Log in</Button>
      <Button variant="danger" id="dan">Sign up</Button>
       </Navbar.Collapse>
      </Navbar>
    );
  }

  export default Navigation;


