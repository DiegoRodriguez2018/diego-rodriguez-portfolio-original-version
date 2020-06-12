import React, { Component } from "react";
import techList from "../data/techStack";

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    const { techstack } = project;
    return (
      <div className="project-card">
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

        <div className="tech-icons">
          {techstack.map(language => {
            const filteredList = techList.filter(item => {
              return item.description === language;
            });
            const iconInfo = filteredList[0];
            return iconInfo ? <span className={iconInfo.className + " icon"} /> : null;
          })}

        </div>
        <div className="project-name">{project.name}</div>
      </div>
    );
  }
}

export default ProjectCard;
