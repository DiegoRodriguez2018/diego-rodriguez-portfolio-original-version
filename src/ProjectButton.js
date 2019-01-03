import React, { Component } from 'react';


class ProjectButton extends Component {
    render() {
        console.log('this.props',': ', this.props);
        
        return (
            <div className="projectbox">
                <a target="blank" href={this.props.url}> 
                {this.props.label}
                <br></br> 
                Build on: {this.props.techstack}
                </a>
            </div>
        )
    }
}


export default ProjectButton;
