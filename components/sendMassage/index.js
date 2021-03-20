import React from 'react'
import cls from './sendMassage.module.css'
import Link from 'next/link'
import { Container } from '@material-ui/core'

export default function SendMassage() {
  return (
    <section id='call'>
      <div className={cls.massage}>
        <Container>
          <div className={cls.row}>
            <div className={cls.textSide}>
              <div className={cls.usText}>
                <h1>
                  Свяжитесь <br /> <span>с нами</span>
                </h1>
                <hr />
              </div>
              <h3>
                Если у Вас возникла проблема с приложением, <br /> есть вопросы
                или пожелания <br className={cls.br} /> Свяжитесь с нами по
                номеру <a href='tel:+99871 200 54 44 '>+99871 200 54 44 </a>
                или по <br />
                <Link href='/'>
                  <a>Телеграм t.me/munouz</a>
                </Link>
              </h3>
            </div>
            <div className={cls.inputs}>
              <div className={cls.inputSide}>
                <div className={cls.email}>
                  <input type='email' placeholder='Почта' />
                  <label htmlFor='email'></label>
                </div>
                <div className={cls.text}>
                  <input type='text' placeholder='Сообщение' />
                  <label htmlFor='text'></label>
                </div>
                <button className={cls.btn}>Отправить</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
