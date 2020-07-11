import React from "react";

import "./table.scss";

export default function Table() {
  return (
    <div className="table">
      <div className="table__row">
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
      </div>

      <div className="table__row">
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
        <span className="table__item">Текст</span>
      </div>
    </div>
  );
}