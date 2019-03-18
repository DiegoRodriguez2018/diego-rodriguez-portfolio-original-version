import React from "react";
import Form from "../Form";
import CloseButton from "../Components/CloseButton";

export default function Contact(props) {
  return (
    <section class="contact-section">
      <CloseButton resetDiegoRodriguez={props.resetDiegoRodriguez} />
      <h3>Contact</h3>
      <p>
        Would you like ask something or just have a chat? <br /> Please get in
        touch!
        <Form />
      </p>
    </section>
  );
}
