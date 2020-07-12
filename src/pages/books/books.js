import React from "react";

import "./styles/main.scss";
import "./styles/pages/books/books.scss";

import { Header, Footer, Menu, ArticleList, Callback, NavArrows, RouteLine, Strengths, ModuleBox, Table } from "./components";

import { ReactComponent as Arrow } from "./assets/images/arrow.svg";
import { ReactComponent as Telegram } from "./assets/images/telegram.svg";

import Book1Src from "./assets/images/books/book_1.png";
import Book2Src from "./assets/images/books/book_2.png";
import Book3Src from "./assets/images/books/book_3.png";
import TriangleSrc from "./assets/images/triangle.png";
import CircleSrc from "./assets/images/circle.png";
import BoxSrc from "./assets/images/box.png";

function App() {
  return (
    <div className="App">
      <Header />

      <RouteLine />

      <main className="main">
        <Menu />

        <div className="menu__column menu__column-right">
          <div className="column__article">
            <div className="article__title-wrap">
              <img className="title__figure" src={CircleSrc} alt="" />

              <h3 className="article__title">
                Топ - 3 книг для развития мышления
              </h3>
            </div>

            <div className="article__books">
              <div className="book__list-item">
                <div className="book__title-mobile">
                  <h4 className="book__title">Гибкое сознание</h4>

                  <span className="book__author">Кэрол Дуэк</span>
                </div>

                <img src={Book1Src} alt="" className="book__image" />

                <div className="book__text">
                  <h4 className="book__title">Гибкое сознание</h4>

                  <span className="book__author">Кэрол Дуэк</span>

                  <p className="book__description-wrap">
                    <span className="book__description-about">О чём?</span>
                    <p className="book__description">
                      О том, что интеллект и талант - это не все что вам нужно
                      для успеха и том как таланты могут стать преградой на пути
                      к нему. Талантливые люди пытаются доказать всем, как они
                      умны и талантливы, вместо того, чтобы развивать их. Кроме
                      того, они верят, что талант ведет к успеху сам по себе. И
                      они ошибаются. Переход к гибкому сознанию усиливает
                      мотивацию и продуктивность в бизнесе, образовании и
                      спорте. Он обогащает личные отношения.
                    </p>
                    <span className="book__description-about">
                      Когда вы прочитаете эту книгу, вы узнаете как это
                      происходит. Купить можно здесь:
                    </span>
                  </p>

                  <a
                    href="https://oz.by/books/more10321131.html?sbtoken=2e56e15bbccb5c6c240a51da0d725ff2"
                    className="book__link"
                  >
                    https://oz.by/books/more10321131.html?sbtoken=2e56e15bbccb5c6c240a51da0d725ff2
                  </a>
                </div>
              </div>

              <div className="book__list-item">
                <div className="book__title-mobile">
                  <h4 className="book__title">Думай медленно, решай быстро</h4>

                  <span className="book__author">Дэниел Канеман</span>
                </div>

                <img src={Book2Src} alt="" className="book__image" />

                <div className="book__text">
                  <h4 className="book__title">Думай медленно, решай быстро</h4>

                  <span className="book__author">Дэниел Канеман</span>

                  <p className="book__description-wrap">
                    <span className="book__description-about">О чём?</span>
                    <p className="book__description">
                      О том, что наши действия и поступки определены нашими
                      мыслями. Но всегда ли мы контролируем наше мышление? В
                      книге можно найти объяснение нашим нерациональные
                      поступкам и тому как мы принимаем неверные решения, исходя
                      из 2 систем мышления: медленной и быстрой.
                    </p>
                    <span className="book__description-about">
                      О том как это работает, читайте в книге. Купить можно
                      здесь:
                    </span>
                  </p>

                  <a
                    href="https://oz.by/books/more10342348.html?sbtoken=80711086aa66c7aaed79357773fb0fa3"
                    className="book__link"
                  >
                    https://oz.by/books/more10342348.html?sbtoken=80711086aa66c7aaed79357773fb0fa3
                  </a>
                </div>
              </div>

              <div className="book__list-item">
                <div className="book__title-mobile">
                  <h4 className="book__title">
                    Безграничный разум. Учиться, учить и жить без ограничений
                  </h4>

                  <span className="book__author">Джо Боулер</span>
                </div>

                <img src={Book3Src} alt="" className="book__image" />

                <div className="book__text">
                  <h4 className="book__title">
                    Безграничный разум. Учиться, учить и жить без ограничений
                  </h4>

                  <span className="book__author">Джо Боулер</span>

                  <p className="book__description-wrap">
                    <span className="book__description-about">О чём?</span>

                    <p className="book__description">
                      О том, что настало время забыть все чему вас учили до
                      этого. Автор говорит о том, что врожденной склонности к
                      тому или иному предмету не существует. Это иллюзия. Ничто
                      в этом мире не является залогом ваших выдающихся успехов,
                      кроме ошибок. В книге вы узнаете, что ошибки это лучшее
                      что может с вами произойти, и как сделать так чтобы они
                      работали исключительно на вас.
                    </p>

                    <span className="book__description-about">
                      Купить можно здесь:
                    </span>
                  </p>

                  <a
                    href="https://oz.by/books/more10913678.html?sbtoken=2fcf35f50fefd514ed9b933175646f5c"
                    className="book__link"
                  >
                    https://oz.by/books/more10913678.html?sbtoken=2fcf35f50fefd514ed9b933175646f5c
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="arrows__container">
            <div className="button__wrap border-prev">
              <button className="page__arrow page__arrow-prev">

                <Arrow />
              </button>
            </div>
            <div className="button__wrap border-next">
              <button className="page__arrow page__arrow-next">

                <Arrow />
              </button>
            </div>
          </div>

          <div className="callback__container">
            <div className="button__wrap border-callback">
              <button className="callback__button">

                <span>Перейти к следующему модулю</span>
              </button>
            </div>

            <div className="button__wrap border-callback">
              <button className="callback__button">

                <span>Вопрос эксперту </span>
              </button>
            </div>

            <div className="button__wrap border-callback">
              <a className="callback__button" href="localhost:3000">

                <span>
                  Поддержка <Telegram />
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
