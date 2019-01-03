import React, { Component } from 'react';


class ProjectButton extends Component {
    render() {
        return (
            <div className="projectbox">
                <a target="blank" href={this.props.url}> {this.props.label} </a>
            </div>
        )
    }
}


export default ProjectButton;
