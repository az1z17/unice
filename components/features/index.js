import React from 'react'
import cls from './features.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function Features() {
  return (
    <section id='banner'>
      <div className={cls.bg}>
        <div className={cls.textSide}>
          <Container>
            <div className={cls.landingPage}>
              <div className={cls.textPage}>
                <div className={cls.text}>
                  <h2 className={cls.h1}>Скачайте Muno </h2>
                  <hr />
                </div>
                <div>
                  <p>
                    Скачайте приложение "Muno" в App Store <br /> или Google
                    Play.
                  </p>
                </div>
                <div>
                  <ul className={cls.list}>
                    <li className={cls.pd}>
                      <Link href='/'>
                        <a className={`${cls.btn} ${cls.btnWhite}`}>
                          <img
                            src='images/app store (2).svg'
                            alt='appStore'
                            className={cls.phone1}
                          />
                          <img
                            src='images/app store (2).svg'
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
                            src='images/google play (2).svg'
                            alt='googlePlay'
                            className={cls.phone1}
                          />
                          <img
                            src='images/google play (2).svg'
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
          </Container>
        </div>
        <div className={cls.imagesSide}>
          <div className={cls.landingImg}>
            <img
              src='images/phones (5).png'
              alt='phoneApp'
              className={cls.phone1}
            />
            <img
              src='images/image (1).png'
              alt='phoneApp'
              className={cls.phone}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
