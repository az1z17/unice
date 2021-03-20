import React from 'react'
import Container from '@material-ui/core/Container'
import Link from 'next/link'
import cls from './about.module.css'

export default function About() {
  return (
    <section id='about'>
      <div className={cls.about}>
        <div className={cls.imagesSide}>
          <img src='images/phones (4).png' alt='phone' className={cls.phone1} />
          <img src='images/image (4).png' alt='phone' className={cls.phone} />
        </div>
        <div className={cls.textSide}>
          <div className={cls.row}>
            <div className={cls.munoText}>
              <h1>Что такое Мuno?</h1>
              <hr />
            </div>
            <div className={cls.text}>
              <p>
                Мuno - это сервис, где фанаты могут заказать персонализированные
                видео поздравления от своих любимых знаменитостей, актеров,
                блогеров илиспортсменов. Наша миссия - создать самые аутентичные
                и запоминающиеся впечатления.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
