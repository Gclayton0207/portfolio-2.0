import React from "react";
import "./sobre.css";
import Eu from "../../assets/Sobre.png";
import { FaAward } from "react-icons/fa";
import { FiGitCommit } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

const Sobre = () => {
  return (
    <section id="sobre">
      <h2>Sobre mim</h2>
      <div className="sobre__container">
        <div className="sobre__mim">
        <div className="sobre__mim-imagem">
          <img src={Eu} alt="foto Giovanni Clayton" />
        </div>
        </div>
        <div className="sobre__conteudo">
          <div className="sobre__cards">
            <article className="sobre__card">
              <FiGitCommit className="sobre__icone" />
              <h5>Commits</h5>
              <small>+ de 300 commits feitos</small>
            </article>
            <article className="sobre__card">
              <FaAward className="sobre__icone"/>
              <h5>Mais que pronto</h5>
              <small>Conceito final no curso da Resilia Educação</small>
            </article>
            <article className="sobre__card">
              <TbWorld className="sobre__icone"/>
              <h5>Projetos</h5>
              <small>+10 de projetos feitos</small>
            </article>
          </div>
          <p>
            Olá me chamo Giovanni Clayton Dias Alves, sou desenvolvedor full
            stack, graduado em Análise e Desenvolvimento de sistemas, pela
            Universidade Anhanguera, formado em desenvolvimento web na Resilia
            Educação busco uma oportunidade de trabalho na área de
            desenvolvimento, como desenvolvedor web junior.
          </p>

          <p>
            Apaixonado por tecnologia em busca de recolocação no mercado de
            trabalho,venho da área de suporte técnico e espero poder usar as
            habilidades adquiridas nesse tempo, como trabalho em equipe,
            resolução de problemas e treinamento de funcionários, da melhor
            forma possível como desenvolvedor junior.
          </p>

          <p>
            Em minha antiga função como Field Engineer na Unisys, eu era
            responsável por solucionar vários problemas técnicos para a equipe,
            ajudar na manutenção do servidor e instalar uma ampla variedade de
            equipamentos. Enquanto trabalhava lá, ajudei no desenvolvimento e
            implantação de novas práticas do departamento.
          </p>
          <a href="#contato" className="btn btn-primary">
            Vamos conversar!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
