import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { Icon20LogoVk } from '@vkontakte/icons'
import { ImWhatsapp } from 'react-icons/im'

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b0olpbl', 'template_xm5ek3i', form.current, 'QogOoRseEkmj8zSBf')
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact' className='contact'>
      <h5>Контакты</h5>
      <h2>Связаться со мной</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Электронная почта</h4>
            <h5>tavsheng@yandex.ru</h5>
            <a href='mailto:tavsheng@yandex.ru' target='blank'>Отправить сообщение</a>
          </article>
          <article className='contact__option'>
            <Icon20LogoVk className='contact__option-icon'/>
            <h4>Сообщение в вк</h4>
            <h5>Динис Мустафин</h5>
            <a href='https://vk.com/im?sel=21017050' target='blank'>Отправить сообщение</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+79273143616</h5>
            <a href='https://api.whatsapp.com/send?phone=+79273143616' target='blank'>Отправить сообщение</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Ваше имя' required />
          <input type="email" name="user_email" placeholder='Ваша электронная почта' required />
          <textarea name="message" rows='7' placeholder='Ваше сообщение' required />
          <button type="submit" className='btn btn-primary'>Отправить</button>
        </form>

      </div>
    </section>
  );
}
export default Contact;

