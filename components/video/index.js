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
                  <h2 className={cls.h1}>Получите видео </h2>
                  <hr />
                </div>
                <div>
                  <h4>
                    Если заказ в течение 7 дней не будет <br /> выполнен - мы
                    вернем деньги обратно на <br /> карту.
                  </h4>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className={cls.imagesSide}>
          <div className={cls.landingImg}>
            <img
              src='images/phones (3).png'
              alt='phoneApp'
              className={cls.phone1}
            />
            <img
              src='images/image (3).png'
              alt='phoneApp'
              className={cls.phone}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
