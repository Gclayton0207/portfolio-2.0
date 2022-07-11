import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://via.placeholder.com/480/4db5ff/FFFFFF/?text=Em+construcao1!",
    Titulo: "Titulo do projeto",
    github: "https://github.com/",
    pagina: "https://github.com/",
  },
  {
    id: 2,
    image:
      "https://via.placeholder.com/480/4db5ff/FFFFFF/?text=Em+construcao2!",
    Titulo: "Titulo do projeto",
    github: "https://github.com/",
    pagina: "https://github.com/",
  },
  {
    id: 3,
    image:
      "https://via.placeholder.com/480/4db5ff/FFFFFF/?text=Em+construcao3!",
    Titulo: "Titulo do projeto",
    github: "https://github.com/",
    pagina: "https://github.com/",
  },
  {
    id: 4,
    image:
      "https://via.placeholder.com/480/4db5ff/FFFFFF/?text=Em+construcao4!",
    Titulo: "Titulo do projeto",
    github: "https://github.com/",
    pagina: "https://github.com/",
  },
  {
    id: 5,
    image:
      "https://via.placeholder.com/480/4db5ff/FFFFFF/?text=Em+construcao5!",
    Titulo: "Titulo do projeto",
    github: "https://github.com/",
    pagina: "https://github.com/",
  },
  {
    id: 6,
    image:
      "https://via.placeholder.com/480/4db5ff/FFFFFF/?text=Em+construcao6!",
    Titulo: "Titulo do projeto",
    github: "https://github.com/",
    pagina: "https://github.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Meus projetos recentes</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, titulo, github, pagina }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={titulo} />
              </div>
              <h3>{titulo}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={pagina}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Pagina
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
