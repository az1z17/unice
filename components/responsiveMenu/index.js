import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import cls from './responsiveMenu.module.css'
import Link from 'next/link'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import CloseIcon from '@material-ui/icons/Close'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default function ResponsiveMenu({ closeMenu }) {
  const [langMenu, setLangMenu] = useState(false)

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
              <Link href='/'>
                <a>Что такое Muno?</a>
              </Link>
            </li>
            <li className={cls.hasChild}>
              <Link href='/'>
                <a>Как это работает?</a>
              </Link>
            </li>
            <li className={cls.hasChild}>
              <Link href='/'>
                <a>Свяжитесь с нами</a>
              </Link>
            </li>
          </ul>
          <button className={cls.btn}>Заказать видео</button>
        </nav>
      </div>
    </Container>
  )
}
