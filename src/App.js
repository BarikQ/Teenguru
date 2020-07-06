import React from "react";
import "./styles/main.scss";

import { Header, Footer } from "./components/index";

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
        <div className="module__container">
          <h2 className="module-title">Hard Skills</h2>
          <p className="module-description">
            Технические способности или наборы навыков, которые легко определить
            количественно и которые можно наглядно продемонстрировать.
          </p>
        </div>
        <div className="module__container">
          <h2 className="module-title">Soft Skills</h2>
          <p className="module-description">
            Позволяют быть успешным независимо от специфики деятельности и
            направления, в котором работает человек.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
