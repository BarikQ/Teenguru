import React from "react";

import "./styles/main.scss";
import "./styles/pages/task/task.scss";

import { Header, Footer, Menu, ArticleList, Callback, NavArrows, RouteLine } from "./components";

import { ReactComponent as Lock } from "./assets/images/modules/dist/Lock.svg";
import { ReactComponent as ArrowBlack } from "./assets/images/arrow_black.svg";
import { ReactComponent as Arrow } from "./assets/images/arrow.svg";
import { ReactComponent as Telegram } from "./assets/images/telegram.svg";
import { ReactComponent as Star } from "./assets/images/star.svg";

import Book1Src from "./assets/images/books/book_1.png";
import Book2Src from "./assets/images/books/book_2.png";
import Book3Src from "./assets/images/books/book_3.png";
import TriangleSrc from "./assets/images/triangle.png";
import CircleSrc from "./assets/images/circle.png";
import Text1Src from "./assets/images/text/img_1.png"
import Text2Src from "./assets/images/text/img_2.png"

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
                Как проходить модуль "Что такое стартап?"
              </h3>
            </div>

            <div className="article__content">
              <h4 className="article__intro">Из этого модуля вы узнаете:</h4>

              <ArticleList />

              <div className="article__text">
                <p className="article__paragraph">
                  Первый модуль состоит из видео, презентаций, статей и рекомендуемой литературы, а также ссылок для самостоятельного изучения. Мы рекомендуем изучать материалы модуля в том порядке, в котором они представлены. В среднем вы можете тратить 15-20 минут своего времени в день на изучение этого модуля.
                </p>
                <br />
                <p className="article__paragraph">
                  В конце модуля вы пройдете тест и сможете выполнить задание и отправить нам свое решение, чтобы получить от нас комментарии.
                </p>
                <br />
                <p className="article__paragraph">
                  Мы всегда с вами на связи, и в любом момент вы можете задать нам свой вопрос в телеграм-чате.
                </p>
              </div>

              <div className="article__module">
                <span className="module__number">Модуль 5.</span>
                <h4 className="module__title">Финансы</h4>

                <p className="module__overview">
                  Разница между группой и командой. Лидерство - что это? Лидерами рождаются или становятся? Собрать команду которая работает как единый механизм.
                </p>
              </div>
            </div>
          </div>

          <NavArrows />

          <Callback />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
