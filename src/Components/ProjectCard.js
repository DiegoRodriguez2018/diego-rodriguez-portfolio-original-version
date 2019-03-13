import React, { Component } from 'react';
import LanguageTag from './LanguageTag';


class ProjectCard extends Component {
    render() {
      const { project } =  this.props;
      const { techstack } = project;
      return (
            <div className="project-card">
                 <a target="blank" href={project.url}> 
                  <div className="project-name"> 
                    {project.name}
                  </div>
                  <br></br> 
                  {techstack.map(language => {
                    return(<LanguageTag language={language}/>);
                  })}
                 </a>
             </div>
        )
    }
}


export default ProjectCard;
