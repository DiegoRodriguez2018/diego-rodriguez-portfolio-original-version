import React from "react";
import Projects from "../Components/Projects";
import CloseButton from "../Components/CloseButton";

const projects = [
  {
    name: "Bubblesort Algorithm Animation",
    techstack: ["React.js"],
    githubUrl: "https://github.com/DiegoRodriguez2018/bubble-sort",
    liveUrl: "https://bubble-sort.netlify.com/"
  },
  {
    name: "A Two-Sided Marketplace",
    techstack: ["Ruby on Rails"],
    githubUrl: "https://github.com/DiegoRodriguez2018/market-place-rails-project"
  },
  {
    name: "A URL-shortener",
    techstack: ["Ruby on Rails"],
    githubUrl:
      "https://github.com/DiegoRodriguez2018/simple-rails-url-shortener-exercise"
  },
  {
    name: "Blog with authentication",
    techstack: ["Ruby on Rails"],
    githubUrl: "https://github.com/DiegoRodriguez2018/rails-blog-with-authentication"
  },
  {
    name: "Simple blog website",
    techstack: ["Django"],
    githubUrl: "https://github.com/DiegoRodriguez2018/django-blog"
  },
  {
    name: "This website repository",
    techstack: ["React.js", "SASS"],
    githubUrl:
      "https://github.com/DiegoRodriguez2018/diego-rodriguez-portfolio-website-netlify"
  },
  {
    name: "Forex Terminal App",
    techstack: ["Ruby"],
    githubUrl:
      "https://github.com/DiegoRodriguez2018/real-time-currency-converter-terminal-app"
  }
];

export default function Portfolio(props) {
  return (
    <section class="portfolio-section">
      <CloseButton resetDiegoRodriguez={props.resetDiegoRodriguez} />
      <Projects projects={projects} />

    </section>
  );
}
