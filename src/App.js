import React, { Component } from 'react';
import './stylesheets/styles.css';
import './index';
import ProjectButton from './ProjectButton'
import Form from './Form'

class App extends Component {

  projects = [
    {
      name: "Bubblesort Algorithm Animation",
      techstack: "React.js",
      url: "https://github.com/DiegoRodriguez2018/bubble-sort",
    },
    { 
      name: "A Two-Sided Marketplace",
      techstack: "Ruby on Rails",
      url: "https://github.com/DiegoRodriguez2018/market-place-rails-project"
    },
    {
      name: "A URL-shortener",
      techstack: "Ruby on Rails ",
      url: "https://github.com/DiegoRodriguez2018/simple-rails-url-shortener-exercise"
    },
    {
      name: "Blog with authentication",
      techstack: "Ruby on Rails",
      url: "https://github.com/DiegoRodriguez2018/rails-blog-with-authentication"
    },
    {
      name: "Simple blog website",
      techstack: "Django",
      url: "https://github.com/DiegoRodriguez2018/django-blog"
    },
    {
      name: "This website repository",
      techstack: "React.js, SASS",
      url: "https://github.com/DiegoRodriguez2018/diego-rodriguez-portfolio-website-netlify"
    },
    {
      name: "Forex Terminal App",
      techstack: "Ruby",
      url: "https://github.com/DiegoRodriguez2018/real-time-currency-converter-terminal-app"
    }
  ]


  render() {
    return (
      <div>
        <nav>
          <button id="navBarButton" autofocus>&#9658;</button>
          <div id="navBar">
            <li><a href="#main-page" onclick="hideNavBar()">Main</a></li>
            <li><a href="#about-page" onclick="hideNavBar()">About</a></li>
            <li><a href="#skills-page" onclick="hideNavBar()">Skillset</a></li>
            <li><a href="#background-interest-page" onclick="hideNavBar()">Education</a></li>
            <li><a href="#stack-page" onclick="hideNavBar()">Projects</a></li>
            <li><a href="#contact-page" onclick="hideNavBar()">Contact</a></li>
          </div>
        </nav>
        <header id="header">
          <div class="headertop"> <strong>Diego</strong> </div>
          <div class="headerbottom"> <strong>Rodriguez </strong> </div>
        </header>
        <main>
          <section id="main-page">
            <canvas></canvas>
            <div class="first-name">
              <h1>Diego</h1>
            </div>
            <div class="last-name">
              <h1>Rodriguez</h1>
            </div>
            <div class="sub-heading">
              <h2>Software Developer with background in Engineering and Science.</h2>
            </div>
            <div class="section-below">
              <div class="socials">
                <a target="blank" href="https://github.com/DiegoRodriguez2018"><i class="fab fa-github-square"></i></a>
                <a target="blank" href="https://www.linkedin.com/in/diego-rodriguez-47226698/"><i class="fab fa-linkedin"></i></a>
              </div>
              <div class="to-about-page">
                <a href="#about-page"> &#x25BC; </a>
              </div>
            </div>
          </section>
          <div class="link" id="about-page"></div>
          <section class="about">
            <p>
              Hi, I’m Diego. I have professional experience in diverse sectors, including the industrial,
              environmental and academic sectors. I enjoy interacting and creating technology and in the last years I
              have develop a true passion for software development.
            </p>
            <p>
              I love finding creative ways to solve complex problems. I appreciate when technology is done right as I
              have seen how it can empower people to archive more and even improve their quality of life.
            </p>
          </section>
          <div class="link" id="skills-page"></div>
          <section class="skills">
            <h3>Skillset: </h3>
            <div class="skillset">
              <ul>
                <li><i class="devicons devicons-postgresql"></i> PostgreSQL</li>
                <li><i class="devicons devicons-sqllite"></i>SQLite</li>
                <li><i class="devicons devicons-mongodb"></i>MongoDB</li>
              </ul>
              <ul>
                <li><i class="devicons devicons-github_badge"></i>Github</li>
                <li><i class="devicons devicons-python"></i>Python</li>
                <li><i class="devicons devicons-java"></i>Java</li>
              </ul>
              <ul>
                <li> <i class="devicons devicons-ruby"></i>Ruby
                    </li>
                <li> <i class="devicons devicons-ruby_on_rails"></i>Ruby on Rails
                    </li>
                <li><i class="devicons devicons-javascript"></i>Javascript</li>
              </ul>
              <ul>
                <li><i class="devicons devicons-javascript"></i>React.js</li>
                <li><i class="devicons devicons-javascript"></i>Node.js </li>
                <li><i class="devicons devicons-javascript"></i>Express.js </li>
              </ul>
              <ul>
                <li><i class="devicons devicons-javascript"></i>Vue.js </li>
                <li><i class="devicons devicons-css3"></i>CSS3/4 </li>
                <li> <i class="devicons devicons-html5"></i>HTML5
                    </li>
              </ul>
            </div>
            <br />
            <p> I love coding and technology in general, and some of the areas I would like to expand in the future
                include;
                Data Science , Artificial Intelligence, Mobile Development and 3D Modelling.
            </p>
          </section>
          <div class="link" id="background-interest-page"></div>
          <section class="background-interest">
            <h3>
              Academic Background:
            </h3>
            <ul>
              <li> Diploma in Information Technology. Coder Academy 2018.
                </li>
              <li>
                Ms. Environmental Change Management. University of Technology, Sydney. 2013.
                </li>
              <li>
                Bachelor in Mechanical Engineering. University of San Carlos. 2010.
                </li>
            </ul>
          </section>
          <div class="link" id="stack-page"></div>
          <section class="stack">
            <h3>Projects</h3>

            <p>
              Please check out some of my projects on Github:
                <div class="projectslinks">
                {
                  this.projects.map(project => {
                    
                    return <ProjectButton label={project.name} techstack={project.techstack} url={project.url} />
                  })
                }
              </div>
            </p>
          </section>
          <div class="link" id="contact-page"></div>
          <section class="contact">
            <h3>Contact</h3>
            <p>
              Would you like ask something or just have a chat? <br /> Please get in touch!
                <Form />

     
            </p>
          </section>
        </main>
        <footer>
          Diego Rodriguez 2018 <a target="blank" href="https://github.com/DiegoRodriguez2018"><i class="fab fa-github-square"></i></a>
          <a target="blank" href="https://www.linkedin.com/in/diego-rodriguez-47226698/"><i class="fab fa-linkedin"></i></a>
        </footer>
      </div>
    );
  }
}

export default App;
