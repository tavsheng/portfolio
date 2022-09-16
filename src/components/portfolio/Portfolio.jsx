import React from 'react'
import './portfolio.css'
import GA from '../../assets/getage.png'
import chat from '../../assets/chat.png'
import twitter from '../../assets/twitter.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Проекты</h5>
      <h2>Портфолио</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={GA} alt='getage' />
          </div>
          <h3>Проект по названию 'Get Age'</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/tavsheng/age-app' className='btn' target='blank'>Гитхаб</a>
            <a href='https://suspicious-mahavira-030222.netlify.app' className='btn btn-primary' target='blank'>Демо</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={chat} alt='chat' />
          </div>
          <h3>Проект по названию 'Chat'</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/tavsheng/chats' className='btn' target='blank'>Гитхаб</a>
          <a href='https://chats-f78d6.web.app/' className='btn btn-primary' target='blank'>Демо</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={twitter} alt='twitter' />
          </div>
          <h3>Проект по названию 'Twitter clone'</h3>
         <div className='portfolio__item-cta'>
         <a href='https://github.com/tavsheng/twitter-clone' className='btn' target='blank'>Гитхаб</a>
          <a href='https://twitter-clone-2d6bb.web.app/' className='btn btn-primary' target='blank'>Демо</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio