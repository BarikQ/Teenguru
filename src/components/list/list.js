import React from "react";

import "./list.scss";

import { ReactComponent as Star } from "./../../assets/images/star.svg";

export default function ArticleList() {
  return (
    <ul className="article__list">
      <li className="article__list-item">
        <Star className="item__marker" />

        <span className="item__text">Что такое стартап?</span>
      </li>
      <li className="article__list-item">
        <Star className="item__marker" />

        <span className="item__text">Чем стартап отличается от малого бизнеса?</span>
      </li>
      <li className="article__list-item">
        <Star className="item__marker" />

        <span className="item__text">Что важно для успеха стартапа?</span>
      </li>
      <li className="article__list-item">
        <Star className="item__marker" />

        <span className="item__text">Можно ли подростку начать свой бизнес?</span>
      </li>
      <li className="article__list-item">
        <Star className="item__marker" />

        <span className="item__text">С чего начать свой бизнес?</span>
      </li>
    </ul>
  );
}
