import React from "react";

import "./list.scss";

import { ReactComponent as Star } from "./../../assets/images/list/star.svg";
import { ReactComponent as Circle } from "./../../assets/images/list/circle.svg";

export default function ArticleList() {
  return (
    <ul className="article__list">
      <li className="article__list-item">
        Что такое стартап?
      </li>

      <li className="article__list-item">
        Чем стартап отличается от малого бизнеса?
      </li>

      <li className="article__list-item">
        Что важно для успеха стартапа?
      </li>

      <li className="article__list-item">
        Можно ли подростку начать свой бизнес?
      </li>

      <li className="article__list-item">
        С чего начать свой бизнес?
      </li>
    </ul>
  );
}
