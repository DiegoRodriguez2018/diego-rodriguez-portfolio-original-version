import React from 'react';

const languages = {
  PostgreSQL: <span><i class="devicons devicons-postgresql"></i> PostgreSQL</span>,
  SQLite: <span><i class="devicons devicons-sqllite"></i>SQLite</span>,
  MongoDB: <span><i class="devicons devicons-mongodb"></i>MongoDB</span>
}

export default function Skillset () {
  return (
    <section class="skills">
    <h3>Skillset: </h3>
    <div class="skillset">
      <ul>
        <li> { languages.PostgreSQL } </li>
        <li> { languages.SQLite } </li>
        <li> { languages.MongoDB } </li>
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
  );
}