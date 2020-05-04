import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Instructor from './instructor'
import Student from './Student'
import Course from './course'
import {Container, Navbar, Row, Col} from 'react-bootstrap';

function Home() {
  return(

  <div >
  <Container fluid id="container">


  <div class="row">
                          <div class="col-md-6">
                             
                          </div>
                  
                          <div class="col-md-6 text-center">
                  
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                  <div class="carousel-inner">
                                    <div class="carousel-item active">
                                      <p id="learn">Learn on your schedule</p>
                                      <p id="topic">Study any topic, anytime. Choose from thousands of <br/> expert-led courses now.</p>
                                    </div>
                                  
                                  </div>
                                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </div>
                              
                          </div>
                      </div>
  </Container>

  <Course/>
  </div>
    
  );
  
}



export default Home;

