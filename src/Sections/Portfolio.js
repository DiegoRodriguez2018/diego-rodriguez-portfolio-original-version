import React from "react";
import ProjectCarousel from "../Components/ProjectCarousel";
import CloseButton from "../Components/CloseButton";

const projects = [
  {
    name: "Bubblesort Algorithm Animation",
    techstack: ["React.js"],
    url: "https://github.com/DiegoRodriguez2018/bubble-sort"
  },
  {
    name: "A Two-Sided Marketplace",
    techstack: ["Ruby on Rails"],
    url: "https://github.com/DiegoRodriguez2018/market-place-rails-project"
  },
  {
    name: "A URL-shortener",
    techstack: ["Ruby on Rails"],
    url:
      "https://github.com/DiegoRodriguez2018/simple-rails-url-shortener-exercise"
  },
  {
    name: "Blog with authentication",
    techstack: ["Ruby on Rails"],
    url: "https://github.com/DiegoRodriguez2018/rails-blog-with-authentication"
  },
  {
    name: "Simple blog website",
    techstack: ["Django"],
    url: "https://github.com/DiegoRodriguez2018/django-blog"
  },
  {
    name: "This website repository",
    techstack: ["React.js", "SASS"],
    url:
      "https://github.com/DiegoRodriguez2018/diego-rodriguez-portfolio-website-netlify"
  },
  {
    name: "Forex Terminal App",
    techstack: ["Ruby"],
    url:
      "https://github.com/DiegoRodriguez2018/real-time-currency-converter-terminal-app"
  }
];

export default function Portfolio(props) {
  return (
    <section class="stack">
      <CloseButton resetDiegoRodriguez={props.resetDiegoRodriguez} />
      <h3>Projects</h3>
      <p>
        Please check out some of my projects on Github:
        <ProjectCarousel projects={projects} />
      </p>
    </section>
  );
}
