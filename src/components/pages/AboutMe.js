import React from 'react'

export default function AboutMe() {
  return (

    <div id="aboutMeDiv" class="row pageSection">
    {/* <div>AboutMe</div> */}

    <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center">
    <div class="card" id="aboutMeCard">
      <div class="card-body">
        <h5 class="card-title">Hello! My name is James Porter,</h5>
        <p class="card-text">I am a Fullstack Web Developer who is looking to get things done. My primary drive is the creation of efficient, effective and clean websites for your users. I can work with a variety of backend database technologies such as MongoDB, IndexDB, mySQL and noSQL</p>
        {/* <a href="/#" class="btn btn-success" id="cardBtn">Click here to see my work</a> */}
      </div>
    </div>
    </div>

    <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center imgDiv">
    <img src="./selfie.jpg" class="img-fluid rounded float-end" id="heroImg" alt="..."></img>
    </div>

    </div>
  )
}
