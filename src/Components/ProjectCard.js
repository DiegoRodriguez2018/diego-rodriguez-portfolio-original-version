import React, { Component } from 'react';


class ProjectCard extends Component {
    render() {
      const { project } =  this.props;
      return (
            <div className="project-card">
                 <a target="blank" href={project.url}> 
                 {project.name}
                 <br></br> 
                 {project.techstack}
                 </a>
             </div>
        )
    }
}


export default ProjectCard;
