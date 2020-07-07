import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as Thinking } from "./../../assets/images/modules/dist/thinking.svg";
import { ReactComponent as Idea } from "./../../assets/images/modules/dist/idea.svg";
import { ReactComponent as Metrics } from "./../../assets/images/modules/dist/metrics.svg";
import { ReactComponent as Communication } from "./../../assets/images/modules/dist/communication.svg";
import { ReactComponent as Finances } from "./../../assets/images/modules/dist/finances.svg";
import { ReactComponent as Product } from "./../../assets/images/modules/dist/product.svg";
import { ReactComponent as Auction } from "./../../assets/images/modules/dist/auction.svg";
import { ReactComponent as Control } from "./../../assets/images/modules/dist/control.svg";
import { ReactComponent as Lock } from "./../../assets/images/modules/dist/Lock.svg";
import { ReactComponent as Arrow } from "./../../assets/images/arrow.svg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="module__card module__card-buy">
            <Product className="module__icon" />

            <div className="module__description">
              <span className="module__number">Модуль 1.</span>

              <h4 className="module__title">Формирование продукта</h4>

              <p className="module__description">
                Разница между бизнесом и стартапом. Из каких компонентов состоит
                любой бизнес, а также без чего он не возможен. Что такое MVP.
                Как и для чего составлять бизнес модель.
              </p>
            </div>

            <div className="module__buttons">
              <button className="module__button module__button-start">
                <span className="button__text">Начать</span>
              </button>

              <span className="module__price text-price">
                <span>2 574</span> р.
              </span>

              <div className="button__border">
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

              <div className="button__border">
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

              <div className="button__border">
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
                состоянии бизнес на данный момент? Кто такие инвесторы и бизнес
                - ангелы. Какой инвестор нужен?
              </p>
            </div>

            <div className="module__buttons">
              <button className="module__button module__button-start">
                <span className="button__text">Начать</span>
              </button>

              <span className="module__price text-price">
                <span>2 574</span> р.
              </span>

              <div className="button__border">
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

              <div className="button__border">
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

              <div className="button__border">
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

              <div className="button__border">
                <button className="module__button module__button-buy">
                  <span className="button__text">Купить</span>
                </button>
              </div>

              <Lock className="module__lock" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}