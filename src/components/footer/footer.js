import React from "react";

import "./footer.scss";

import { ReactComponent as VkIcon } from "./../../assets/images/footer/dist/vkIcon.svg";
import { ReactComponent as FbIcon } from "./../../assets/images/footer/dist/fbIcon.svg";
import { ReactComponent as InstIcon } from "./../../assets/images/footer/dist/instIcon.svg";
import { ReactComponent as InIcon } from "./../../assets/images/footer/dist/inIcon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="brand__title footer__brand">
        <span className="text-purple">Бизнес </span>
        <span>Академия </span>
        <span className="text-pink">TeenGuru</span>
      </h1>

      <div className="footer__links">
        <a href="teenguru.by" target="_blank" className="footer__link">teenguru.by</a>
        <a href="imaguru.by" target="_blank" className="footer__link">imaguru.by</a>
      </div>

      <div className="footer__socials">
        <ul className="social__list">
          <li className="social__item">
            <VkIcon />
          </li>
          <li className="social__item">
            <FbIcon />
          </li>
          <li className="social__item">
            <InstIcon />
          </li>
          <li className="social__item">
            <InIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
}