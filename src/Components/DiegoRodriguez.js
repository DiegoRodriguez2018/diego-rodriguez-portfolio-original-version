import React from "react";

export default function DiegoRodriguez(props) {
  const { display, setIndex, setDiegoRodriguezClass } = props;

  const renderMainPage = () => {
    setIndex(0);
    setDiegoRodriguezClass("display-as-main-page");
  };

  return (
    <section>
      <div className={display}>
        <div className="full-name" onClick={renderMainPage}>
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
