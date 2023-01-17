import React from 'react'

export default function featuredProject() {
  return (
    <>
<div class="row featuredSection pageSection d-flex " id="featuredDiv">
<div class="row" id="featuredHeader">
<div class="col-12 d-flex justify-content-center">
    <h4>BirdsEye</h4>
</div>
</div>
<div class="col-6 d-flex justify-content-center align-items-center" id="featuredWork">
  <a href="https://birds-eye-app.herokuapp.com/">
    <img class="projectImg" src="./universal-scheduler.png" alt="primary project screenshot"></img>
  </a>
</div>
<div class="col-6 d-flex justify-content-center align-items-center" id="featuredDescription">
  <p class="card-text">BirdsEye is a project management and employee tracker tool that enables managers and small business owner to model their organizations structure, track their staff roster and setup projects while tracking their progress. BirdEye allows managers to send new staff email invites to their organization and provides managers access to tools inaccessible to lower level staff.
  </p>
</div>
</div>
    </>
  )
}
