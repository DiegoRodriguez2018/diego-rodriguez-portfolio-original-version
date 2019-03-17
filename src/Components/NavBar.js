import React, { Component } from 'react';

export default class NavBar extends Component {

  renderComponent = (e) => {
    const id = e.target.id;
    const { setIndex, setDiegoRodriguezClass } = this.props;
    setIndex(id);
    setDiegoRodriguezClass("display-as-header");
  }

  render() {
    return (
      <nav className="navbar-section">
        <div className="navbar-options">
          <button href='#' id="1" onClick={this.renderComponent}>About</button>
          <button href='#' id="2" onClick={this.renderComponent}>Skillset</button>
          <button href='#' id="3" onClick={this.renderComponent}>Education</button>
          <button href='#' id="4" onClick={this.renderComponent}>Projects</button>
          <button href='#' id="5" onClick={this.renderComponent}>Contact</button>
        </div>
      </nav>
    );
  }
}
