import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {MdHomeRepairService} from 'react-icons/md'


const Nav = () => {
  return (
    <nav>
      <a href="#" className="active"><AiOutlineHome /></a>
      <a href="#sobre"><AiOutlineUser /></a>
      <a href="#experiencia"><BiBook /></a>
      <a href="#servicos"><MdHomeRepairService /></a>
      <a href="#contato"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
