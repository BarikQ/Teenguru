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
        <div className="skill__container skill__container-hard">
          <h2 className="skill__title">Hard Skills</h2>

          <p className="skill__description">
            Технические способности или наборы навыков, которые легко определить
            количественно и которые можно наглядно продемонстрировать.
          </p>

          <div className="skill__modules">
            <div className="module__card module__card-open">
              <Thinking className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 1.</span>

                <h4 className="module__title">Мышление</h4>

                <p className="module__description">
                  Роль мышление в бизнесе, особенности и нюансы
                  предпринимательского мышления в сравнении с обычным. Как
                  сделать мышление более эффективным для бизнеса.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-buy">
              <Idea className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 2.</span>

                <h4 className="module__title">Поиск идеи</h4>

                <p className="module__description">
                  Где брать идеи, должна ли быть идея креативной? Как развивать
                  креативность для бизнеса? Как понять что идея “выстрелит”?
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-lock">
              <Metrics className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 3.</span>

                <h4 className="module__title">Маркетинг</h4>

                <p className="module__description">
                  Инвестирование в стартапы на разных его стадиях и работа
                  синдикатов. Доступ к документам для оценки стартапов и
                  структурирования инвестиций.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-lock">
              <Communication className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 4.</span>

                <h4 className="module__title">Коммуникация</h4>

                <p className="module__description">
                  Отправить письмо партнеру, презентовать проект инвестору - это
                  все коммуникация. Основные правила для конструктивного
                  общения.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-lock">
              <Finances className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 5.</span>

                <h4 className="module__title">Финансы</h4>

                <p className="module__description">
                  Разница между группой и командой. Лидерство - что это?
                  Лидерами рождаются или становятся? Собрать команду которая
                  работает как единый механизм.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>
          </div>

          <div className="skill__all">
            <span className="module__price text-price">
              <span>12 990</span> р.
            </span>

            <div className="button__wrap">
              <button className="skill__buy button-def"><span>Купить весь курс</span></button>
            </div>
          </div>
        </div>

        <div className="skill__container skill__container-soft">
          <h2 className="skill__title">Soft Skills</h2>

          <p className="skill__description">
            Позволяют быть успешным независимо от специфики деятельности и
            направления, в котором работает человек.
          </p>

          <div className="skill__modules">
            <div className="module__card module__card-buy">
              <Product className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 1.</span>

                <h4 className="module__title">Формирование продукта</h4>

                <p className="module__description">
                  Разница между бизнесом и стартапом. Из каких компонентов
                  состоит любой бизнес, а также без чего он не возможен. Что
                  такое MVP. Как и для чего составлять бизнес модель.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-buy">
              <Metrics className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 1.</span>

                <h4 className="module__title">Маркетинг</h4>

                <p className="module__description">
                  Понятие и портрет целевой аудитории. Выход продукта на
                  рынок.Каналы продвижения. Смм, пиар.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-buy">
              <Auction className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 1.</span>

                <h4 className="module__title">Юридические аспекты</h4>

                <p className="module__description">
                  Легальный бизнес в 16 - это миф? Что говорит закон про
                  подростковый бизнес. Сколько нужно денег и куда идти чтобы
                  легально стать бизнесменом.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-buy">
              <Finances className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 1.</span>

                <h4 className="module__title">Финансы</h4>

                <p className="module__description">
                  Где брать деньги на развитие бизнеса? В каком финансовом
                  состоянии бизнес на данный момент? Кто такие инвесторы и
                  бизнес - ангелы. Какой инвестор нужен?
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>

            <div className="module__card module__card-buy">
              <Control className="module__icon" />

              <div className="module__description">
                <span className="module__number">Модуль 1.</span>

                <h4 className="module__title">Управление проектом</h4>

                <p className="module__description">
                  Понять эффективность проекта. Планировать и организовывать
                  работу с наибольшей эффективностью. Модель спиральной динамики
                  развития проекта.
                </p>
              </div>

              <div className="module__buttons">
                <button className="module__button module__button-start">
                  <span className="button__text">Начать</span>
                </button>

                <span className="module__price text-price">
                  <span>2 574</span> р.
                </span>

                <div className="button__wrap">
                  <button className="module__button module__button-buy">
                    <span className="button__text">Купить</span>
                  </button>
                </div>

                <Lock className="module__lock" />
              </div>
            </div>
          </div>

          <Gallery className="skill__gallery" />

          <div className="skill__all">
            <span className="module__price text-price">
              <span>12 990</span> р.
            </span>

            <div className="button__wrap">
              <button className="skill__buy button-def"><span>Купить весь курс</span></button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;