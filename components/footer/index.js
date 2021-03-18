import React from 'react'
import cls from './footer.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {
  return (
    <section id='footer'>
      <div className={cls.footer}>
        <Container>
          <div className={cls.row}>
            <div className={cls.textSide}>
              <div className={cls.brand}>
                <img src='images/Logo.jpg' alt='logoMuno' />
              </div>
              <div className={cls.blogs}>
                <ul className={cls.list}>
                  <AnchorLink href='#whiteBanner'>
                    <li>Как это работает?</li>
                  </AnchorLink>
                  <AnchorLink href='#about'>
                    <li>Что такое Muno? </li>
                  </AnchorLink>
                  <AnchorLink href='#screen'>
                    <li>Правила сервиса</li>
                  </AnchorLink>
                  <AnchorLink href='#call'>
                    <li>Свяжитесь с нами</li>
                  </AnchorLink>
                </ul>
              </div>
              <div className={cls.textMuno}>
                © 2021 ООО "Muno Group". Все права защищены
              </div>
            </div>

            <div className={cls.payment}>
              <div className={cls.icon}>
                <Link href='/'>
                  <a>
                    <img src='images/click.png' alt='click' />
                  </a>
                </Link>
                <Link href='/'>
                  <a className={cls.visa}>
                    <img src='images/visa.png' alt='visa' />
                  </a>
                </Link>
                <Link href='/'>
                  <a>
                    <img src='images/image 2.png' alt='mastercard' />
                  </a>
                </Link>
                <Link href='/'>
                  <a>
                    <img src='images/Layer 2.png' alt='payment' />
                  </a>
                </Link>
              </div>
              <div className={cls.socialMedia}>
                <Link href='/'>
                  <a>
                    <img src='images/app store (2).png' alt='appstore' />
                  </a>
                </Link>
                <Link href='/'>
                  <a className={cls.google}>
                    <img src='images/google play (2).png' alt='google play' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
