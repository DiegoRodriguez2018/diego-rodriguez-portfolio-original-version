import React from "react";
import CloseButton from "../Components/CloseButton";

const languages = {
  PostgreSQL: (
    <span>
      <i class="devicons devicons-postgresql" /> PostgreSQL
    </span>
  ),
  SQLite: (
    <span>
      <i class="devicons devicons-sqllite" />SQLite
    </span>
  ),
  MongoDB: (
    <span>
      <i class="devicons devicons-mongodb" />MongoDB
    </span>
  )
};

export default function Skillset(props) {
  return (
    <section class="skills">
      <CloseButton resetDiegoRodriguez={props.resetDiegoRodriguez} />
      <h3>Skillset: </h3>
      <div class="skillset">
        <ul>
          <li> {languages.PostgreSQL} </li>
          <li> {languages.SQLite} </li>
          <li> {languages.MongoDB} </li>
        </ul>
        <ul>
          <li>
            <i class="devicons devicons-github_badge" />Github
          </li>
          <li>
            <i class="devicons devicons-python" />Python
          </li>
          <li>
            <i class="devicons devicons-java" />Java
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <i class="devicons devicons-ruby" />Ruby
          </li>
          <li>
            {" "}
            <i class="devicons devicons-ruby_on_rails" />Ruby on Rails
          </li>
          <li>
            <i class="devicons devicons-javascript" />Javascript
          </li>
        </ul>
        <ul>
          <li>
            <i class="devicons devicons-javascript" />React.js
          </li>
          <li>
            <i class="devicons devicons-javascript" />Node.js{" "}
          </li>
          <li>
            <i class="devicons devicons-javascript" />Express.js{" "}
          </li>
        </ul>
        <ul>
          <li>
            <i class="devicons devicons-javascript" />Vue.js{" "}
          </li>
          <li>
            <i class="devicons devicons-css3" />CSS3/4{" "}
          </li>
          <li>
            {" "}
            <i class="devicons devicons-html5" />HTML5
          </li>
        </ul>
      </div>
      <br />
      <p>
        {" "}
        I love coding and technology in general, and some of the areas I would
        like to expand in the future include; Data Science , Artificial
        Intelligence, Mobile Development and 3D Modelling.
      </p>
    </section>
  );
}
