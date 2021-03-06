import React from "react";

import "./header.scss";

import imaguruSrc from "./../../assets/images/header/dist/imaguru.png";
import teenguruSrc from "./../../assets/images/header/dist/teenguru.png";
import britishSrc from "./../../assets/images/header/dist/british.png";
// import userSrc from "./../../assets/images/header/dist/user.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="brand__title header__brand">
          <a href="localhost:3000">
            <span className="text-purple">Бизнес </span>
            <span>Академия </span>
            <span className="text-pink">TeenGuru</span>
          </a>
        </h1>

        <div className="header__logos">
          <img src={imaguruSrc} className="header__logo imaguru" alt="#" />
          <img src={teenguruSrc} className="header__logo teenguru" alt="#" />
          <img src={britishSrc} className="header__logo british" alt="#" />
        </div>

        <div className="user__actions">
          <a className="action__sub user__action" href="localhost:3000">Войти</a>

          <div className="button__wrap action__prim user__action">
            <button className="action__button">
              <span className="button__text">РЕГИСТРАЦИЯ</span>
            </button>
          </div>


          {/* <a href="localhost:3000" className="header__user">
          <img src={userSrc} alt="user-pic" className="user-pic" />
          <span className="user-name">Евгений</span>
          </a> */}
        </div>
      </div>

    </header>
  );
}
