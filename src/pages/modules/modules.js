import React from "react";
import AliceCarousel from 'react-alice-carousel'
import Gallery from "./components/gallery/gallery"


import "./styles/main.scss";
import "./styles/pages/modules/modules.scss";
import 'react-alice-carousel/lib/alice-carousel.css'

import { Header, Footer } from "./components/index";

import { ReactComponent as Thinking } from "./assets/images/modules/dist/thinking.svg";
import { ReactComponent as Idea } from "./assets/images/modules/dist/idea.svg";
import { ReactComponent as Metrics } from "./assets/images/modules/dist/metrics.svg";
import { ReactComponent as Communication } from "./assets/images/modules/dist/communication.svg";
import { ReactComponent as Finances } from "./assets/images/modules/dist/finances.svg";
import { ReactComponent as Product } from "./assets/images/modules/dist/product.svg";
import { ReactComponent as Auction } from "./assets/images/modules/dist/auction.svg";
import { ReactComponent as Control } from "./assets/images/modules/dist/control.svg";
import { ReactComponent as Lock } from "./assets/images/modules/dist/Lock.svg";
import { ReactComponent as Arrow } from "./assets/images/arrow.svg";

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
            <a href="localhost:3000" className="route-current">
              Модули
            </a>
          </li>
        </ul>
      </nav>

      <main className="main">
        <div className="skill-container skill-container-hard">
          <h2 className="skill-title">Hard Skills</h2>

          <p className="skill-description">
            Технические способности или наборы навыков, которые легко определить
            количественно и которые можно наглядно продемонстрировать.
          </p>

          <div className="skill-modules">
            <div className="module-card module-card-open">
              <Thinking className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 1.</span>

                <h4 className="module-title">Мышление</h4>

                <p className="module-description">
                  Роль мышление в бизнесе, особенности и нюансы
                  предпринимательского мышления в сравнении с обычным. Как
                  сделать мышление более эффективным для бизнеса.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-buy">
              <Idea className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 2.</span>

                <h4 className="module-title">Поиск идеи</h4>

                <p className="module-description">
                  Где брать идеи, должна ли быть идея креативной? Как развивать
                  креативность для бизнеса? Как понять что идея “выстрелит”?
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-lock">
              <Metrics className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 3.</span>

                <h4 className="module-title">Маркетинг</h4>

                <p className="module-description">
                  Инвестирование в стартапы на разных его стадиях и работа
                  синдикатов. Доступ к документам для оценки стартапов и
                  структурирования инвестиций.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-lock">
              <Communication className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 4.</span>

                <h4 className="module-title">Коммуникация</h4>

                <p className="module-description">
                  Отправить письмо партнеру, презентовать проект инвестору - это
                  все коммуникация. Основные правила для конструктивного
                  общения.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-lock">
              <Finances className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 5.</span>

                <h4 className="module-title">Финансы</h4>

                <p className="module-description">
                  Разница между группой и командой. Лидерство - что это?
                  Лидерами рождаются или становятся? Собрать команду которая
                  работает как единый механизм.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>
          </div>

          <div className="skill-all">
            <span className="module-price text-price">
              <span>12 990</span> р.
            </span>

            <div className="button-wrap">
              <button className="skill-buy button-def"><span>Купить весь курс</span></button>
            </div>
          </div>
        </div>

        <div className="skill-container skill-container-soft">
          <h2 className="skill-title">Soft Skills</h2>

          <p className="skill-description">
            Позволяют быть успешным независимо от специфики деятельности и
            направления, в котором работает человек.
          </p>

          <div className="skill-modules">
            <div className="module-card module-card-buy">
              <Product className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 1.</span>

                <h4 className="module-title">Формирование продукта</h4>

                <p className="module-description">
                  Разница между бизнесом и стартапом. Из каких компонентов
                  состоит любой бизнес, а также без чего он не возможен. Что
                  такое MVP. Как и для чего составлять бизнес модель.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-buy">
              <Metrics className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 1.</span>

                <h4 className="module-title">Маркетинг</h4>

                <p className="module-description">
                  Понятие и портрет целевой аудитории. Выход продукта на
                  рынок.Каналы продвижения. Смм, пиар.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-buy">
              <Auction className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 1.</span>

                <h4 className="module-title">Юридические аспекты</h4>

                <p className="module-description">
                  Легальный бизнес в 16 - это миф? Что говорит закон про
                  подростковый бизнес. Сколько нужно денег и куда идти чтобы
                  легально стать бизнесменом.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-buy">
              <Finances className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 1.</span>

                <h4 className="module-title">Финансы</h4>

                <p className="module-description">
                  Где брать деньги на развитие бизнеса? В каком финансовом
                  состоянии бизнес на данный момент? Кто такие инвесторы и
                  бизнес - ангелы. Какой инвестор нужен?
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>

            <div className="module-card module-card-buy">
              <Control className="module-icon" />

              <div className="module-description">
                <span className="module-number">Модуль 1.</span>

                <h4 className="module-title">Управление проектом</h4>

                <p className="module-description">
                  Понять эффективность проекта. Планировать и организовывать
                  работу с наибольшей эффективностью. Модель спиральной динамики
                  развития проекта.
                </p>
              </div>

              <div className="module-buttons">
                <button className="module-button module-button-start">
                  <span className="button-text">Начать</span>
                </button>

                <span className="module-price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button-wrap">
                  <button className="module-button module-button-buy">
                    <span className="button-text">Купить</span>
                  </button>
                </div>

                <Lock className="module-lock" />
              </div>
            </div>
          </div>

          <Gallery className="skill-gallery" />

          <div className="skill-all">
            <span className="module-price text-price">
              <span>12 990</span> р.
            </span>

            <div className="button-wrap">
              <button className="skill-buy button-def"><span>Купить весь курс</span></button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
