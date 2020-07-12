import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.scss";

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

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="button__wrap gallery__nav gallery__nav-prev" onClick={onClick}>
      <button className="gallery__arrow gallery__arrow-prev"> <Arrow /> </button>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="button__wrap gallery__nav gallery__nav-next" onClick={onClick}>
      <button className="gallery__arrow gallery__arrow-next"> <Arrow /> </button>
    </div>
  );
}

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    const { className } = props;

    this.state = {
      className: className
    }
  }

  render(props) {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: "unslick"
          // slidesToShow: 2,
          // slidesToScroll: 1
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <Slider className={this.state.className} {...settings}>
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
        </Slider>
      </div>
    );
  }
}