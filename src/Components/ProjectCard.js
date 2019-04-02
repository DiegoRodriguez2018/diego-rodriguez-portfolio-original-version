import React, { Component } from "react";
import LanguageTag from "./LanguageTag";

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    const { techstack } = project;
    return (
      <div className="project-card">
        <div className="placeholder"></div>
        <div className="project-name">{project.name}</div>
        <div className="url-links">
          {project.githubUrl && (
            // eslint-disable-next-line 
            <a
              className="github-link devicons devicons-github_badge"
              target="blank"
              href={project.githubUrl}
            />
          )}

          {project.liveUrl && (
            <div className="live-link">
              <a target="blank" href={project.liveUrl}>
                <span>LIVE</span>
              </a>
            </div>
          )}
        </div>

        <div className="language-tags">
          {techstack.map(language => {
            return <LanguageTag language={language} key={language}/>;
          })}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
