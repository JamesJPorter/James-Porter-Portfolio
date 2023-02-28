import React from "react";
// import FeaturedProject from "./FeaturedProject";
import PortfolioItem from "./PortfolioItem";
import projectsData from "./projectsData.json";

export default function Projects() {
  console.log(projectsData)
  return (
    <>
      {projectsData.map((project) => (
        <PortfolioItem
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </>
  );
}
