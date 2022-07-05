import React from "react";
import "./experiencia.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiencia = () => {
  return (
    <section id="experiencia">
      <h5>Minhas Skills</h5>
      <h2> Minhas Experiencias</h2>
      <div className="container experiencia__container">
        <div className="experiencia__frontend">
          <h3>Desenvolvimento Front-end</h3>
          <div className="experiencia__conteudo">
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Intermediário</small>
            </article>
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediário</small>
            </article>
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>BootStrap</h4>
              <small className="text-light">Iniciante</small>
            </article>
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>Tailwind CSS</h4>
              <small className="text-light">Iniciante</small>
            </article>
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediário</small>
            </article>
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>TypeScript</h4>
              <small className="text-light">Intermediário</small>
            </article>
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>Jquery</h4>
              <small className="text-light">Intermediário</small>
            </article>
            <article className="experiencia__detalhes">
              <BsPatchCheckFill />
              <h4>ReactJS</h4>
              <small className="text-light">Intermediário</small>
            </article>
          </div>
        </div>
        <div className="experiencia__backend">
          <h3>Desenvolvimento Back-end</h3>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>NodeJS</h4>
            <small className="text-light">Intermediário</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>API Rest</h4>
            <small className="text-light">Intermediário</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>MySQL</h4>
            <small className="text-light">Intermediário</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Mongo DB</h4>
            <small className="text-light">Básico</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Python</h4>
            <small className="text-light">Básico</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Flask</h4>
            <small className="text-light">Básico</small>
          </article>
        </div>
        <div className="experiencia__softskills">
          <h3>Soft skills</h3>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Trabalho em equipe</h4>
            <small className="text-light">Avançado</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Aprender a aprender</h4>
            <small className="text-light">Intermediário</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Scrum</h4>
            <small className="text-light">Intermediário</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Kanbam</h4>
            <small className="text-light">Intermediário</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Comunicação não violenta</h4>
            <small className="text-light">Intermediário</small>
          </article>
          <article className="experiencia__detalhes">
            <BsPatchCheckFill />
            <h4>Inteligencia emocional</h4>
            <small className="text-light">Intermediário</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
