import React from 'react'
import cls from './video.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function Video() {
  return (
    <section id='banner'>
      <div className={cls.bg}>
        <div className={cls.textSide}>
          <Container>
            <div className={cls.landingPage}>
              <div className={cls.textPage}>
                <div className={cls.text}>
                  <h1 className={cls.h2}>Получите видео </h1>
                  <hr />
                </div>
                <div className={cls.texts}>
                  <p>
                    Если заказ в течение 7 дней не будет <br /> выполнен - мы
                    вернем деньги обратно на <br /> карту.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className={cls.imagesSide}>
          <div className={cls.landingImg}>
            <img
              src='images/phones (7).png'
              alt='phoneApp'
              className={cls.phone1}
            />
            <img
              src='images/image (7).png'
              alt='phoneApp'
              className={cls.phone}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
