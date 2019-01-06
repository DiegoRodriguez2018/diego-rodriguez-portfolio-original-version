import React, { Component } from 'react';


class ProjectButton extends Component {
    render() {
        console.log('this.props',': ', this.props);
        
        return (
            <div className="project-button">
                <a target="blank" href={this.props.url}> 
                {this.props.label}
                <br></br> 
                Tech Stack: {this.props.techstack}
                </a>
            </div>
        )
    }
}


export default ProjectButton;
