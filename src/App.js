import React from "react";

import "./styles/main.scss";
import "./styles/pages/task/task.scss";

import { Header, Footer, Menu, ArticleList, Callback, NavArrows, RouteLine, Strengths, ModuleBox, Table } from "./components";

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
              <img className="title__figure" src={BoxSrc} alt="" />

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

              <ModuleBox />

              <Strengths />

              <Table />
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
