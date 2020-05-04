import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import {Container, Navbar, Row, Col} from 'react-bootstrap';

function Course() {
  return(

    <Container fluid id="containers">


    <div class="container text-center">
    <div class="row wow fadeInUp">
        <div class="col-md-4" id="row">
        <i class="fa fa-mouse-pointer"></i>
       <h5 class="wow fadeInRight delay-2s" id="four">100,000 online courses</h5>
        <p id="ptag">Explore a variety of fresh topibbcs</p>
        </div>

        <div class="col-md-4" id="row">
               <i class="fa fa-check-circle"></i>
               <h5 class="wow fadeInRight delay-2s"  id="four"> Expert instruction</h5>
               <p id="ptag">Find the right instructor for you</p>
                </div>

                <div class="col-md-4" id="row">
                       <i class="fa fa-history" aria-hidden="true"></i>
                       <h5 class="wow fadeInRight delay-2s" id="four">Lifetime access</h5>
                       <p id="ptag">Learn on your schedule</p>
                        </div>
   
    </div>

</div>

                        
    </Container>
    
    
  );
  
}


export default Course;

