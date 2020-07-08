import React from "react";

import "./styles/main.scss";
import "./styles/pages/books/books.scss";

import { Header, Footer } from "./components/index";

import { ReactComponent as Lock } from "./assets/images/modules/dist/Lock.svg";
import { ReactComponent as ArrowBlack } from "./assets/images/arrow_black.svg";
import { ReactComponent as Arrow } from "./assets/images/arrow.svg";
import { ReactComponent as Telegram } from "./assets/images/telegram.svg";

function App() {
  return (
    <div className="App">
      <Header />

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

      <main className="main">
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
                        Притча про торговца обувью - показывает как влияет
                        взгляд на ситуацию.
                      </li>
                      <li className="list__item list__item-active">
                        Что влияет на мышление?
                      </li>
                      <li className="list__item">Мышление предпринимателя.</li>
                      <li className="list__item">
                        Способы развития разных типов мышления.
                      </li>
                      <li className="list__item">
                        Задание: как из проблемы сделать задачу?
                      </li>
                      <li className="list__item list__item-test">ТЕСТ</li>
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
                        Притча про торговца обувью - показывает как влияет
                        взгляд на ситуацию.
                      </li>
                      <li className="list__item">Что влияет на мышление?</li>
                      <li className="list__item">Мышление предпринимателя.</li>
                      <li className="list__item">
                        Способы развития разных типов мышления.
                      </li>
                      <li className="list__item">
                        Задание: как из проблемы сделать задачу?
                      </li>
                      <li className="list__item list__item-test">ТЕСТ</li>
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
                        Притча про торговца обувью - показывает как влияет
                        взгляд на ситуацию.
                      </li>
                      <li className="list__item">Что влияет на мышление?</li>
                      <li className="list__item">Мышление предпринимателя.</li>
                      <li className="list__item">
                        Способы развития разных типов мышления.
                      </li>
                      <li className="list__item">
                        Задание: как из проблемы сделать задачу?
                      </li>
                      <li className="list__item list__item-test">ТЕСТ</li>
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
                        Притча про торговца обувью - показывает как влияет
                        взгляд на ситуацию.
                      </li>
                      <li className="list__item">Что влияет на мышление?</li>
                      <li className="list__item">Мышление предпринимателя.</li>
                      <li className="list__item">
                        Способы развития разных типов мышления.
                      </li>
                      <li className="list__item">
                        Задание: как из проблемы сделать задачу?
                      </li>
                      <li className="list__item list__item-test">ТЕСТ</li>
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
                        Притча про торговца обувью - показывает как влияет
                        взгляд на ситуацию.
                      </li>
                      <li className="list__item">Что влияет на мышление?</li>
                      <li className="list__item">Мышление предпринимателя.</li>
                      <li className="list__item">
                        Способы развития разных типов мышления.
                      </li>
                      <li className="list__item">
                        Задание: как из проблемы сделать задачу?
                      </li>
                      <li className="list__item list__item-test">ТЕСТ</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="menu__column menu__column-right">
          <div className="column__article">
            <h3 className="article__title-text">2. Что влияет на мышление?</h3>

            <div className="article__text">
              <p>
                Повседневная практика показывает, что реализация намеченных
                плановых заданий позволяет выполнять важные задания по
                разработке модели развития. Не следует, однако забывать, что
                постоянное информационно-пропагандистское обеспечение нашей
                деятельности позволяет выполнять важные задания по разработке
                системы обучения кадров, соответствует насущным потребностям.
                Товарищи! постоянное информационно-пропагандистское обеспечение
                нашей деятельности требуют определения и уточнения систем
                массового участия. Повседневная практика показывает, что начало
                повседневной работы по формированию позиции требуют от нас
                анализа системы обучения кадров, соответствует насущным
                потребностям. Товарищи! постоянный количественный рост и сфера
                нашей активности обеспечивает широкому кругу (специалистов)
                участие в формировании систем массового участия.
              </p>

              <p>
                Задача организации, в особенности же постоянное
                информационно-пропагандистское обеспечение нашей деятельности
                влечет за собой процесс внедрения и модернизации системы
                обучения кадров, соответствует насущным потребностям. Задача
                организации, в особенности же укрепление и развитие структуры
                позволяет оценить значение системы обучения кадров,
                соответствует насущным потребностям. Не следует, однако
                забывать, что постоянный количественный рост и сфера нашей
                активности влечет за собой процесс внедрения и модернизации форм
                развития. Повседневная практика показывает, что рамки и место
                обучения кадров позволяет оценить значение системы обучения
                кадров, соответствует насущным потребностям.
              </p>

              <p>
                С другой стороны постоянный количественный рост и сфера нашей
                активности позволяет выполнять важные задания по разработке
                системы обучения кадров, соответствует насущным потребностям.
                Таким образом укрепление и развитие структуры играет важную роль
                в формировании соответствующий условий активизации. Повседневная
                практика показывает, что постоянный количественный рост и сфера
                нашей активности представляет собой интересный эксперимент
                проверки соответствующий условий активизации. С другой стороны
                дальнейшее развитие различных форм деятельности позволяет
                выполнять важные задания по разработке модели развития.
              </p>
            </div>
          </div>

          <div className="arrows__container">
            <div className="button__wrap border-prev">
              <button className="page__arrow page__arrow-prev"> <Arrow /> </button>
            </div>
            <div className="button__wrap border-next">
              <button className="page__arrow page__arrow-next"> <Arrow /> </button>
            </div>
          </div>

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
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
