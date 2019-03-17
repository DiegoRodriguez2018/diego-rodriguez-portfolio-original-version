import React, { Component } from "react";
import "./stylesheets/styles.css";
import "./index";

// Sections
import MainPage from "./Sections/MainPage";
import About from "./Sections/About";
import Skillset from "./Sections/Skillset";
import Education from "./Sections/Education";
import Portfolio from "./Sections/Portfolio";
import Contact from "./Sections/Contact";

//Components
import NavBar from "./Components/NavBar";
import Socials from "./Components/Socials";

class App extends Component {
  state = {
    sections: [
      <MainPage />,
      <About />,
      <Skillset />,
      <Education />,
      <Portfolio />,
      <Contact />
    ],
    currentIndex: 0
  };

  setIndex = index => {
    const currentIndex = index;
    this.setState({ currentIndex });
  };

  render() {
    const { sections, currentIndex } = this.state;
    if (sections.length > 0) {
      return (
        <div>
          <NavBar setIndex={this.setIndex} />
          <main>
            <canvas />
            {sections[currentIndex]}
            <Socials />
          </main>
          {/* footer */}
        </div>
      );
    } else {
      return <canvas />;
    }
  }
}

export default App;
