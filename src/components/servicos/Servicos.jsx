import React from "react";
import "./servicos.css";
import { BiCheck } from "react-icons/bi";

export const Servicos = () => {
  return (
    <section id="servicos">
      <h2>Serviços</h2>
      <div className="container servicos__container">
        <article className="servicos">
          <div className="servicos__head">
            <h3>Front-end</h3>
          </div>
          <ul className="servicos__list">
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Styled components</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>web socket.io</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Redux</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Responsividade</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Consumo de API</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>SPA e Landing pages</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>MVC</p>
            </li>
          </ul>
        </article>
        <article className="servicos">
          <div className="servicos__head">
            <h3>Back-end</h3>
          </div>
          <ul className="servicos__list">
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Clean code</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Solid</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Criação de API REST</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Sequelize</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Promises</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Async/Await</p>
            </li>
          </ul>
        </article>
        <article className="servicos">
          <div className="servicos__head">
            <h3>Softwares</h3>
          </div>
          <ul className="servicos__list">
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>VS code</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Linux Ubuntu</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>MySQL Workbench</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>GIT bash</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Insomnia/Postman</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className="servicos__list-icon" />
              <p>Canva</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Servicos;
