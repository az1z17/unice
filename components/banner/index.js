import React from 'react'
import cls from './banner.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function Banner() {
  return (
    <section id='banner'>
      <div className={cls.bg}>
        <div className={cls.textSide}>
          <Container>
            <div className={cls.landingPage}>
              <div className={cls.textPage}>
                <div className={cls.text}>
                  <h2 className={cls.h1}>
                    Заказывайте видео- <br /> сообщении от своих <br /> Кумиров
                  </h2>
                </div>
                <div>
                  <ul className={cls.list}>
                    <li className={cls.pd}>
                      <Link href='/'>
                        <a className={`${cls.btn} ${cls.btnWhite}`}>
                          <img
                            src='images/app store.svg'
                            alt='appStore'
                            className={cls.phone1}
                          />
                        </a>
                      </Link>
                    </li>
                    <li className={cls.pd1}>
                      <Link href='/'>
                        <a className={`${cls.btn} ${cls.btnBlack}`}>
                          <img
                            src='images/google play.svg'
                            alt='googleplay'
                            className={cls.phone1}
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className={cls.imagesSide}>
          <div className={cls.landingImg}>
            <img src='images/Group (1).png' alt='phoneApp' />
          </div>
          <div className={cls.blog}>
            <ul className={cls.list}>
              <li className={cls.pd}>
                <Link href='/'>
                  <a className={`${cls.btn} ${cls.btnWhite}`}>
                    <img
                      src='images/app store (1).svg'
                      alt='appStore'
                      className={cls.phone}
                    />
                  </a>
                </Link>
              </li>
              <li className={cls.pd1}>
                <Link href='/'>
                  <a className={`${cls.btn} ${cls.btnBlack}`}>
                    <img
                      src='images/google play (1).svg'
                      alt='googlePlay'
                      className={cls.phone}
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
