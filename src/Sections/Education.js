import React from "react";
import CloseButton from "../Components/CloseButton";

export default function Education(props) {
  return (
    <section class="education-container">
      <CloseButton resetDiegoRodriguez={props.resetDiegoRodriguez} />
      <h3>Academic Background:</h3>
      <ul>
        <li> Diploma in Information Technology. Coder Academy 2018.</li>
        <li>
          Ms. Environmental Change Management. University of Technology, Sydney.
          2013.
        </li>
        <li>
          Bachelor in Mechanical Engineering. University of San Carlos. 2010.
        </li>
      </ul>
    </section>
  );
}
