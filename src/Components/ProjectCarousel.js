import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

class ProjectCarousel extends Component {
  state = {
    currentIndex: 0
  };

  renderNext = () => {
    let { currentIndex } = this.state;
    if (currentIndex === this.props.projects.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    this.setState({ currentIndex });
  };

  renderPrevious = () => {
    let { currentIndex } = this.state;
    if (currentIndex === 0) {
      currentIndex = this.props.projects.length - 1;
    } else {
      currentIndex -= 1;
    }
    this.setState({ currentIndex });
  };

  render() {
    const { projects } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="portfolio-component">
        <div className="projects-title"> 
          <h3>Projects</h3>
          {/* <p>Please check out some of my projects on Github:</p> */}
        </div> 
        <div className="projects-carousel-container">
          <div className="projects-carousel">
            <a className="carousel-button left" onClick={this.renderPrevious}>
              &#x25C0;
            </a>
            <ProjectCard project={projects[currentIndex]} />
            <a className="carousel-button right" onClick={this.renderNext}>
              &#x25B6;
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCarousel;
