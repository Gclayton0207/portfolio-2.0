import React from "react";
import "./contato.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contato = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbudvgp",
        "template_zglcyia",
        form.current,
        "nD0YYmdq4LU0eC-7v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contato">
      <h2> Entrar em contato</h2>

      <div className="container contato__container">
        <div className="contato__opcoes">
          <article className="contato__opcao">
            <MdOutlineEmail className="contato__opcao-icon" />
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
            <BsWhatsapp className="contato__opcao-icon" />
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="nome" placeholder="Nome Completo" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            rows="7"
            required
          ></textarea>
          <button type="submit" class="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
