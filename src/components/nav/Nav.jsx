import {useState,React} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {MdHomeRepairService} from 'react-icons/md'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#sobre" onClick={() => setActiveNav('#sobre')} className={activeNav === '#sobre' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experiencia" onClick={() => setActiveNav('#experiencia')} className={activeNav === '#experiencia' ? 'active' : ''}><BiBook /></a>
      <a href="#servicos" onClick={() => setActiveNav('#servicos')} className={activeNav === '#servicos' ? 'active' : ''}><MdHomeRepairService /></a>
      <a href="#contato" onClick={() => setActiveNav('#contato')} className={activeNav === '#contato' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
