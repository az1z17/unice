import React from 'react'
import Container from '@material-ui/core/Container'
import Link from 'next/link'
import cls from './screen.module.css'

export default function Screen() {
  return (
    <section id='screen'>
      <div className={cls.about}>
        <div className={cls.imagesSide}>
          <img src='images/phones (4).png' alt='phone' className={cls.phone1} />
          <img src='images/image (6).png' alt='phone' className={cls.phone} />
        </div>
        <div className={cls.textSide}>
          <Container>
            <div className={cls.row}>
              <div className={cls.munoText}>
                <h1>Выберите звезду</h1>
                <hr />
              </div>
              <div className={cls.text}>
                <p>
                  Выберите знаменитость, от которой хотите получить личное
                  видеообращение
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
