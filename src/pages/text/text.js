import React from "react";

import "./styles/main.scss";
import "./styles/pages/text/text.scss";

import { Header, Footer, Menu } from "./components/index";

import { ReactComponent as Arrow } from "./assets/images/arrow.svg";
import { ReactComponent as Telegram } from "./assets/images/telegram.svg";
import Text1Src from "./assets/images/text/img_1.png"
import Text2Src from "./assets/images/text/img_2.png"

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
        <Menu />

        <div className="menu__column menu__column-right">
          <div className="column__article">
            <div className="article__title-wrap">
              <h3 className="article__title-text">2. Что влияет на мышление?</h3>
            </div>

            <div className="article__content">
              <p className="paragraph__wrap">
                <img className="paragraph__image paragraph__image-left" src={Text1Src} vspace="24" hspace="10" alt="" />

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
              </p>

              <p className="paragraph__wrap">
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
              </p>

              <p className="paragraph__wrap">
                <img className="paragraph__image paragraph__image-right" src={Text2Src} vspace="24" hspace="10" alt="" />

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
