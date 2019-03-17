import React from 'react';
import CloseButton from '../Components/CloseButton';

export default function About (props) {
  return (
    <section className="about-container">
      <CloseButton resetDiegoRodriguez = {props.resetDiegoRodriguez} />
      <h3>
        About me
      </h3>
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
  );
}