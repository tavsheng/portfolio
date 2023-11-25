import React from 'react';
import './about.css'
import aboutMe from '../../assets/about.jpg'

const About = (props) => {
    return (
        <section id='about'>
            <h5>Узнать</h5>
            <h2>Обо мне</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={aboutMe} alt='about-me' />
                    </div>
                </div>
                <div className='about__content'>
                    <p>
                        Здравствуйте! Я родился в России, в деревне Новая Кара в республике Башкортостан.
                        Закончил школу и поступил в педагогический институт на инфак. Закончил институт в 2012 году.
                        Где я только не работал, только не по профессии. Учителем в школе проработал пол года,
                        до этого вел курсы по английскому языку. В конце 2018 года заинтересовался веб
                        разработкой и написал первые "Hello World". С тех пор написал небольшое кол-во
                        проектов, большинство писал прямо с видео на ютюб. Курсов по веб разработке я не
                        проходил, учился с бесплатных ресурсов: youtube, W3schools, HTML Academy, и многие другие.
                        Интересно будет поработать за компьютером, выполнять различные задачи. 
                    </p>
                    <a href='#contact' className='btn btn-primary'>Поговорим</a>
                </div>
            </div>
        </section>
    );
}
export default About;