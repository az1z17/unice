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
          <div className={cls.close} onClick={closeMenu}>
            <img src='images/Logo.svg' alt='munoLogo' />
            <CloseIcon className={cls.closesIcon} />
          </div>
        </div>
        <nav className={`${cls.menu} ${cls.top} ${cls.nav}`}>
          <ul className={cls.navItem}>
            <li className={cls.hasChild}>
              <Link href='/'>
                <a>
                  HOME
                  <ChevronRightIcon
                    className={`${cls.arrowButton} ${cls.positionArrow}`}
                  />
                </a>
              </Link>
            </li>
            <li className={cls.hasChild}>
              <Link href='/'>
                <a>
                  about us
                  <ChevronRightIcon
                    className={`${cls.arrowButton} ${cls.positionDeliver}`}
                  />
                </a>
              </Link>
            </li>
            <li className={cls.hasChild}>
              <Link href='/'>
                <a>
                  contact us
                  <ChevronRightIcon
                    className={`${cls.arrowButton} ${cls.positionDeliver}`}
                  />
                </a>
              </Link>
            </li>

            <li className={cls.hasChild}>
              <Link href='/'>
                <a>
                  information
                  <ChevronRightIcon
                    className={`${cls.arrowButton} ${cls.positionDeliver}`}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={cls.icons}>
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
      </div>
    </Container>
  )
}
