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
import DiegoRodriguez from "./Components/DiegoRodriguez";

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
    currentIndex: 0,
    diegoRodriguezClass: "display-as-main-page"
  };

  setIndex = index => {
    const currentIndex = index;
    this.setState({ currentIndex });
  };

  setDiegoRodriguezClass = newClass => {
    const diegoRodriguezClass = newClass;
    this.setState({ diegoRodriguezClass });
  };

  render() {
    const { sections, currentIndex, diegoRodriguezClass } = this.state;
    if (sections.length > 0) {
      return (
        <div>
          <NavBar
            setIndex={this.setIndex}
            setDiegoRodriguezClass={this.setDiegoRodriguezClass}
          />
          <main>
            <canvas />
            <Socials />
            <DiegoRodriguez
              setIndex={this.setIndex}
              display={diegoRodriguezClass}
              setDiegoRodriguezClass={this.setDiegoRodriguezClass}
            />
            {sections[currentIndex]}
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
