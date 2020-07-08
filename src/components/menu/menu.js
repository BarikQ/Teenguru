import React from "react";

import "./menu.scss";

import { ReactComponent as Lock } from "./../../assets/images/Lock.svg";
import { ReactComponent as ArrowBlack } from "./../../assets/images/arrow_black.svg";

export default function Menu() {
  return (
    <div className="menu__column menu__column-left">
      <input
        className="menu__checkbox"
        type="checkbox"
        name="menuControl"
        id="menuControl"
      />
      <label className="menu__open" htmlFor="menuControl">
        <span className="menu__button-open"></span>
      </label>

      <div className="modules__menu">
        <label className="menu__close" htmlFor="menuControl">
          <span className="menu__button-close"></span>
        </label>

        <h3 className="menu__title">Hard Skills</h3>

        <ul className="modules__list">
          <li>
            <div className="menu__module menu__module-open">
              <input
                className="module__contents-open"
                type="checkbox"
                name=""
                id="module-1"
              />
              <label className="module__label" htmlFor="module-1">
                <div className="label__text">
                  <span className="module__number">Модуль 1.</span>

                  <h4 className="module__title">Мышление</h4>
                </div>

                <Lock className="module__lock" />
                <ArrowBlack className="module__arrow" />
              </label>

              <div className="module__contents">
                <ul className="content__list">
                  <li className="list__item">
                    <a href="localhost:3000">
                      Притча про торговца обувью - показывает как влияет взгляд
                      на ситуацию.
                    </a>
                  </li>
                  <li className="list__item list__item-active">
                    <a href="localhost:3000">Что влияет на мышление?</a>
                  </li>
                  <li className="list__item"><a href="localhost:3000">Мышление предпринимателя.</a></li>
                  <li className="list__item">
                    <a href="localhost:3000">Способы развития разных типов мышления.</a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Задание: как из проблемы сделать задачу? </a>
                  </li>
                  <li className="list__item list__item-test"><a href="localhost:3000">ТЕСТ</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="menu__module menu__module-open">
              <input
                className="module__contents-open"
                type="checkbox"
                name=""
                id="module-2"
              />

              <label className="module__label" htmlFor="module-2">
                <div className="label__text">
                  <span className="module__number">Модуль 2.</span>

                  <h4 className="module__title">Поиск идеи</h4>
                </div>

                <Lock className="module__lock" />
                <ArrowBlack className="module__arrow" />
              </label>

              <div className="module__contents">
                <ul className="content__list">
                  <li className="list__item">
                    <a href="localhost:3000">
                      Притча про торговца обувью - показывает как влияет взгляд
                      на ситуацию.
                    </a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Что влияет на мышление?</a>
                  </li>
                  <li className="list__item"><a href="localhost:3000">Мышление предпринимателя.</a></li>
                  <li className="list__item">
                    <a href="localhost:3000">Способы развития разных типов мышления.</a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Задание: как из проблемы сделать задачу? </a>
                  </li>
                  <li className="list__item list__item-test"><a href="localhost:3000">ТЕСТ</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="menu__module menu__module-close">
              <input
                className="module__contents-open"
                type="checkbox"
                name=""
                id="module-3"
              />

              <label className="module__label" htmlFor="module-3">
                <div className="label__text">
                  <span className="module__number">Модуль 3.</span>

                  <h4 className="module__title">Маркетинг</h4>
                </div>

                <Lock className="module__lock" />
                <ArrowBlack className="module__arrow" />
              </label>

              <div className="module__contents">
                <ul className="content__list">
                  <li className="list__item">
                    <a href="localhost:3000">
                      Притча про торговца обувью - показывает как влияет взгляд
                      на ситуацию.
                    </a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Что влияет на мышление?</a>
                  </li>
                  <li className="list__item"><a href="localhost:3000">Мышление предпринимателя.</a></li>
                  <li className="list__item">
                    <a href="localhost:3000">Способы развития разных типов мышления.</a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Задание: как из проблемы сделать задачу? </a>
                  </li>
                  <li className="list__item list__item-test"><a href="localhost:3000">ТЕСТ</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="menu__module menu__module-close">
              <input
                className="module__contents-open"
                type="checkbox"
                name=""
                id="module-4"
              />

              <label className="module__label" htmlFor="module-4">
                <div className="label__text">
                  <span className="module__number">Модуль 4.</span>

                  <h4 className="module__title">Коммуникация</h4>
                </div>

                <Lock className="module__lock" />
                <ArrowBlack className="module__arrow" />
              </label>

              <div className="module__contents">
                <ul className="content__list">
                  <li className="list__item">
                    <a href="localhost:3000">
                      Притча про торговца обувью - показывает как влияет взгляд
                      на ситуацию.
                    </a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Что влияет на мышление?</a>
                  </li>
                  <li className="list__item"><a href="localhost:3000">Мышление предпринимателя.</a></li>
                  <li className="list__item">
                    <a href="localhost:3000">Способы развития разных типов мышления.</a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Задание: как из проблемы сделать задачу? </a>
                  </li>
                  <li className="list__item list__item-test"><a href="localhost:3000">ТЕСТ</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="menu__module menu__module-close">
              <input
                className="module__contents-open"
                type="checkbox"
                name=""
                id="module-5"
              />

              <label className="module__label" htmlFor="module-5">
                <div className="label__text">
                  <span className="module__number">Модуль 5.</span>

                  <h4 className="module__title">Финансы</h4>
                </div>

                <Lock className="module__lock" />
                <ArrowBlack className="module__arrow" />
              </label>

              <div className="module__contents">
                <ul className="content__list">
                  <li className="list__item">
                    <a href="localhost:3000">
                      Притча про торговца обувью - показывает как влияет взгляд
                      на ситуацию.
                    </a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Что влияет на мышление?</a>
                  </li>
                  <li className="list__item"><a href="localhost:3000">Мышление предпринимателя.</a></li>
                  <li className="list__item">
                    <a href="localhost:3000">Способы развития разных типов мышления.</a>
                  </li>
                  <li className="list__item">
                    <a href="localhost:3000">Задание: как из проблемы сделать задачу? </a>
                  </li>
                  <li className="list__item list__item-test"><a href="localhost:3000">ТЕСТ</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
