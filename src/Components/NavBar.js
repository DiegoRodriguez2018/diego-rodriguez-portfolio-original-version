import React, { Component } from 'react';

export default class NavBar extends Component {

  componentDidMoutn() {
    const navBarOptions = document.querySelector(".navbar-options")    
    navBarOptions.style.visibility = "hidden"
  }

  toggleNavBar = (e) => {
    e.preventDefault()
    const navBarOptions = document.querySelector(".navbar-options")    
    if(navBarOptions.style.visibility === "hidden"){
      navBarOptions.style.visibility = "visible"
    }else{
      navBarOptions.style.visibility = "hidden"
    }
  }

  renderComponent = (e) => {
    const id = e.target.id;
    const { setIndex } = this.props;
    this.toggleNavBar(e);
    setIndex(id);
  }

  render() {
    return (
      <nav className="navbar-section">
        <button className="navbar-button" onClick = {this.toggleNavBar} autoFocus>&#9658;</button>
        <div className="navbar-options">
          <button href='#' id="0" onClick={this.renderComponent}>Main</button>
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
