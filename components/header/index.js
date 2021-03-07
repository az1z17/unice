import React from 'react'
import Container from '@material-ui/core/Container';
import Link from 'next/link'
import cls from './header.module.css'

export default function Header() {
    return (
  <div className={cls.header}>
            <Container>
            <nav className={cls.nav}>
                <div className={cls.brand}>
                <Link href="/" >
                    <a className={cls.logo}>
                        <img src="images/1.png"/>
                    </a>
                </Link>
                </div>
                <div className={cls.blogs}>
                    <ul className={cls.list}>
                        <li>HOME</li>
                        <li>BLOG</li>
                        <li>PAGES</li>
                        <li>ELEMENTS</li>
                        <li>PORTFOLIO</li>
                        <li>FEATURES</li>
                    </ul>
                </div>
              
            </nav>
            </Container>
  </div>
    )
}