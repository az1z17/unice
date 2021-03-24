import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import cls from './responsiveMenu.module.css'
import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close'

export default function ResponsiveMenu({ closeMenu }) {
  const [langMenu] = useState(false)

  return (
    <Container>
      <div className={cls.mobileBlock}>
        <div className={cls.header}>
          <div className={cls.close}>
            <img src='images/Logo.svg' alt='munoLogo' />
            <button className={cls.btn1} onClick={closeMenu}>
              {' '}
              <CloseIcon className={cls.closesIcon} />
            </button>
          </div>
        </div>
        <nav className={`${cls.menu} ${cls.top} ${cls.nav}`}>
          <ul className={cls.navItem}>
            <li className={cls.hasChild}>
              <Link href='#about'>
                <a onClick={closeMenu}>Что такое Muno?</a>
              </Link>
            </li>
            <li className={cls.hasChild}>
              <Link href='#whiteBanner'>
                <a onClick={closeMenu}>Как это работает?</a>
              </Link>
            </li>
            <li className={cls.hasChild}>
              <Link href='#call'>
                <a onClick={closeMenu}>Свяжитесь с нами</a>
              </Link>
            </li>
          </ul>
          <button className={cls.btn}>
            <a href='https://t.me/munouz' onClick={closeMenu} target='_blank'>
              Заказать видео
            </a>
          </button>
        </nav>
      </div>
    </Container>
  )
}
