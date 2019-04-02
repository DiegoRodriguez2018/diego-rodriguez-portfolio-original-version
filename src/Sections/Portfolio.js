import React from "react";
import Projects from "../Components/Projects";
import CloseButton from "../Components/CloseButton";
import projects from '../data/projects';

export default function Portfolio(props) {
  return (
    <section className="portfolio-section">
      <CloseButton resetDiegoRodriguez={props.resetDiegoRodriguez} />
      <Projects projects={projects} />
    </section>
  );
}
