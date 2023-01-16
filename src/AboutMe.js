import React from 'react'

export default function AboutMe() {
  return (
    <>
    <div id="aboutMeDiv">
    {/* <div>AboutMe</div> */}

    <img src="./selfie.jpg" class="img-fluid rounded float-end" id="heroImg" alt="..."></img>
    <div class="card justfiy-content-center align-item-center" id="aboutMeCard" style={{width: "50%"}}>
  <div class="card-body">
    <h5 class="card-title">Hello! My name is James,</h5>
    <p class="card-text">I am a Fullstack Web Developer who is looking to get things done. My primary drive is the creation of efficient, effective and clean websites for your users.  </p>
    <a href="/#" class="btn btn-success d-flex justify-content-center" id="cardBtn">Click here to see my work</a>
  </div>
    </div>
    </div>
    </>
  )
}
