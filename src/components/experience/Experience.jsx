import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Какие у меня навыки</h5>
            <h2>Мои знания</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Фронтенд разработка</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Высокий</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>СSS</h4>
                                <small className='text-light'>Средний</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Средний</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Выше среднего</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__softskills'>
                    <h3>Знание языков</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Английский</h4>
                                <small className='text-light'>Разговорный</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Турецкий</h4>
                                <small className='text-light'>Базовый</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Русский</h4>
                                <small className='text-light'>Родной</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience