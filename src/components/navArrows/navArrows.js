import React from "react";

import "./navArrows.scss";

import { ReactComponent as Arrow } from "./../../assets/images/arrow.svg";

export default function NavArrows() {
  return (
    <div className="arrows__container">
      <div className="button__wrap border-prev">
        <button className="page__arrow page__arrow-prev"> <Arrow /> </button>
      </div>
      <div className="button__wrap border-next">
        <button className="page__arrow page__arrow-next"> <Arrow /> </button>
      </div>
    </div>

  );
}
