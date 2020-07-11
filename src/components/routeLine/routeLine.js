import React from "react";

import "./routeLine.scss";

export default function RouteLine() {
  return (
    <nav className="routes">
      <ul className="routes-list">
        <li className="route">
          <a href="localhost:3000">Главная</a>
        </li>
        <li className="route">
          <a href="localhost:3000">Модули</a>
        </li>
        <li className="route">
          <a href="localhost:3000" className="route-current">
            Содержание
        </a>
        </li>
      </ul>
    </nav>
  );
}
