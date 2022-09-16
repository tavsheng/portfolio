import React from 'react'
import CV from '../../assets/cv.docx'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Загрузить резюме</a>
        <a href="#contact" className='btn btn-primary' >Поговорим</a>
    </div>
  )
}

export default CTA