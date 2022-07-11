/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <p>Desenvolvido por Giovanni Clayton</p>
      
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#experiencia">Experiencia</a>
        </li>
        <li>
          <a href="#servicos">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
      <p>
        Todos os direitos reservados <BiCopyright />
      </p>
      <div className="footer__sociais">
        <a
          href="https://www.linkedin.com/in/giovanni-clayton/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Gclayton0207"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        
      </div>
      
    </footer>
  );
};

export default Footer;
