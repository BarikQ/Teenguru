import React from "react";

import "./callback.scss";

import { ReactComponent as Telegram } from "./../../assets/images/telegram.svg";

export default function Callback() {
  return (
    <div className="callback__container">
      <div className="button__wrap border-callback">
        <button className="callback__button"> <span>Перейти к следующему модулю</span> </button>
      </div>

      <div className="button__wrap border-callback">
        <button className="callback__button"> <span>Вопрос эксперту </span> </button>
      </div>

      <div className="button__wrap border-callback">
        <a className="callback__button" href="localhost:3000"> <span>Поддержка <Telegram /></span> </a>
      </div>
    </div>
  );
}
