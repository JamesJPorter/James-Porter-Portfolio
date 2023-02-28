import React from "react";

export default function PortfolioItem(props) {
  return (
    <div id="projectDiv" class="row pageSection">
      <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center project">
        <div class="card" id="aboutMeCard">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center project imgDiv">
        <a href={props.link}>
          <img
            src={props.image}
            class="img-fluid rounded float-end"
            id="heroImg"
            alt={props.imgAlt}
          ></img>
        </a>
      </div>
    </div>
  );
}
