import React, { Component } from 'react';


class ProjectButton extends Component {
    render() {
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
