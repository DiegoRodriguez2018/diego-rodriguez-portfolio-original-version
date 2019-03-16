import React, { Component } from 'react';

export default class NavBar extends Component {

  componentDidMoutn() {
    const navBarOptions = document.querySelector("#navBarOptions")    
    navBarOptions.style.visibility = "hidden"
  }

  toggleNavBar = (e) => {
    e.preventDefault()
    const navBarOptions = document.querySelector("#navBarOptions")    
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
      <nav>
      <button id="navBarButton" onClick = {this.toggleNavBar} autoFocus>&#9658;</button>
      <div id="navBarOptions">
        <li><a href='#' id="0" onClick={this.renderComponent}>Main</a></li>
        <li><a href='#' id="1" onClick={this.renderComponent}>About</a></li>
        <li><a href='#' id="2" onClick={this.renderComponent}>Skillset</a></li>
        <li><a href='#' id="3" onClick={this.renderComponent}>Education</a></li>
        <li><a href='#' id="4" onClick={this.renderComponent}>Projects</a></li>
        <li><a href='#' id="5" onClick={this.renderComponent}>Contact</a></li>
      </div>
      </nav>
    );
  }
}
