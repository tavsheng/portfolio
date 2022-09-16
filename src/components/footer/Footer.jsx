import React from 'react'
import './footer.css'
import { Icon20LogoVk } from '@vkontakte/icons'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ДИНИС</a>

      <ul className='permalinks'>
        <li> <a href='#'>Главная</a></li>
        <li> <a href='#about'>Обо мне</a></li>
        <li> <a href='#experience'>Мои знания</a></li>
        <li> <a href='#portfolio'>Портфолио</a></li>
        <li> <a href='#contact'>Связаться со мной</a></li>
      </ul>

      <div className = 'footer__socials'>
      <a href = "https://vk.com/tavsheng" target = "_blank"><Icon20LogoVk/></a>
        <a href = "https://github.com/tavsheng" target = "_blank"><AiFillGithub/></a>
      </div>

      <div className = 'footer__copyright'>
        <small>&copy; Динис Мустафин. Все права защищены 2022</small>
      </div>
    </footer>
  )
}

export default Footer