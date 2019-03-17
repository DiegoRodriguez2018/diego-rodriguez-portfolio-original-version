import React from "react";

export default function DiegoRodriguez(props) {
  const { display, resetDiegoRodriguez} = props;

  return (
    <section>
      <div className={display}>
        <div className="full-name" onClick={resetDiegoRodriguez}>
          <div className="first-name">
            <h1>Diego</h1>
          </div>
          <div className="last-name">
            <h1>Rodriguez</h1>
          </div>
        </div>

        <div className="sub-heading">
          <h2>
            Software Developer with background in Engineering and Science.
          </h2>
        </div>
      </div>
    </section>
  );
}
