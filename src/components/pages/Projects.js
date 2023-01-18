import React from 'react'
import FeaturedProject from './FeaturedProject'

export default function Projects() {
  return (
    <>
        < FeaturedProject />
    <div id="projectDiv" class="row pageSection">

    
    <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center project">
    <div class="card" id="aboutMeCard">
  <div class="card-body">
    <h5 class="card-title">BirdsEye</h5>
    <p class="card-text">BirdsEye is a project management and employee tracker tool that enables managers and small business owner to model their organizations structure, track their staff roster and setup projects while tracking their progress. BirdEye allows managers to send new staff email invites to their organization and provides managers access to tools inaccessible to lower level staff.</p>
  </div>
    </div>
    </div>
    <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center project imgDiv">
    <img src="./universal-scheduler.png" class="img-fluid rounded float-end" id="heroImg" alt="..."></img>
    </div>
    </div>

    <div id="projectDiv" class="row pageSection">
    <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center project imgDiv">
    <img src="./selfie.jpg" class="img-fluid rounded float-end" id="heroImg" alt="..."></img>
    </div>
    <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center project">
    <div class="card" id="aboutMeCard">
  <div class="card-body">
    <h5 class="card-title">Hello! My name is James Porter,</h5>
    <p class="card-text">I am a Fullstack Web Developer who is looking to get things done. My primary drive is the creation of efficient, effective and clean websites for your users. I can work with a variety of backend database technologies such as MongoDB, IndexDB, mySQL and noSQL</p>
  </div>
    </div>
    </div>
    </div>

    </>

  )
}
