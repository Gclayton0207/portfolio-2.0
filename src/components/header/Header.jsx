import React from 'react'
import './header.css'
import CTA from './CTA'
import Eu from '../../assets/Eu.png'
import HeaderRedesSociais from './HeaderRedesSociais'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1> Giovanni Clayton</h1>
        <h5 className="text-light">Desenvolvedor Full Stack </h5>
        <CTA />
        <HeaderRedesSociais />


      <div className="eu">
        <img src={Eu} alt="foto Giovanni Clayton" />
      </div>
      <a href="#contato" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
