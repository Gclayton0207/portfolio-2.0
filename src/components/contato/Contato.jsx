import React from "react";
import "./contato.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contato = () => {
  return (
    <section id="contato">
      <h5>Entrar em contato</h5>
      <h2> Vamos conversar!</h2>

      <div className="container contato__container">
        <div className="contato__opcoes">
          <article className="contato__opcao">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>giovanni.gcda@gmail.com</h5>
            <a
              href="mailto:giovanni.gcda@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Enviar email
            </a>
          </article>
          <article className="contato__opcao">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+55 1198527-9146</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=011985279146&text&type=phone_number&app_absent=0"
              rel="noreferrer"
              target="_blank"
            >
              Enviar mensagem
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contato;
