import React from "react";

import "./header.scss";

import imaguruSrc from "./../../assets/images/header/dist/imaguru.png";
import teenguruSrc from "./../../assets/images/header/dist/teenguru.png";
import britishSrc from "./../../assets/images/header/dist/british.png";
import userSrc from "./../../assets/images/header/dist/user.png";

export default function Header() {
  return (
    <header className="header">
      <h1 className="brand__title header__brand">
        <span className="text-purple">Бизнес </span>
        <span>Академия </span>
        <span className="text-pink">TeenGuru</span>
      </h1>

      <div className="header__logos">
        <img src={imaguruSrc} className="header__logo imaguru" alt="#" />
        <img src={teenguruSrc} className="header__logo teenguru" alt="#" />
        <img src={britishSrc} className="header__logo british" alt="#" />
      </div>

      <a href="localhost:3000" className="header__user">
        <img src={userSrc} alt="user-pic" className="user-pic" />
        <span className="user-name">Евгений</span>
      </a>
    </header>
  );
}
