import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Link from 'next/link'
import cls from './header.module.css'
import ResponsiveMenu from '../responsiveMenu'
import MenuIcon from '@material-ui/icons/Menu'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
  const [menu, setMenu] = useState(false)
  return (
    <section id='header'>
      <div className={cls.header}>
        <Container>
          <nav className={cls.nav}>
            <button className={cls.hamburgerIcon} onClick={() => setMenu(true)}>
              <MenuIcon className={cls.burgerMenu} />
            </button>
            <div className={cls.brand}>
              <Link href='/'>
                <a className={cls.logo}>
                  <img src='images/Logo.svg' alt='munoLogo' />
                </a>
              </Link>
            </div>
            <div className={cls.blogs}>
              <ul className={cls.list}>
                <AnchorLink href='#about'>
                  <li>Что такое Muno? </li>
                </AnchorLink>
                <AnchorLink href='#whiteBanner'>
                  <li>Как это работает?</li>
                </AnchorLink>
                <AnchorLink href='#call'>
                  <li>Свяжитесь с нами</li>
                </AnchorLink>
              </ul>
            </div>

            <div className={cls.soicalMedia}>
              <Link href='/'>
                <a>
                  <img src='images/instagram.svg' alt='insatgram' />
                </a>
              </Link>
              <Link href='/'>
                <a>
                  <img src='images/tiktok.svg' alt='tiktok' />
                </a>
              </Link>
              <Link href='/'>
                <a>
                  <img src='images/facebook.svg' alt='facebook' />
                </a>
              </Link>
            </div>
          </nav>
        </Container>
      </div>
      {menu ? <ResponsiveMenu closeMenu={() => setMenu(false)} /> : ''}
    </section>
  )
}
