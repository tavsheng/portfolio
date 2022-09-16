import React from 'react'
import { Icon20LogoVk } from '@vkontakte/icons'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className = 'header__socials'>
        <a href = "https://vk.com/tavsheng" target = "_blank"><Icon20LogoVk/></a>
        <a href = "https://github.com/tavsheng" target = "_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials