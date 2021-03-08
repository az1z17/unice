import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import Link from 'next/link'
import cls from './header.module.css'
import ResponsiveMenu from '../responsiveMenu'
import MenuIcon from '@material-ui/icons/Menu'



export default function Header() {
    const [menu, setMenu] = useState(false)
    return (
  <>
  <div className={cls.header}>
            <Container>
            <nav className={cls.nav}>
            <button className={cls.hamburgerIcon} onClick={() => setMenu(true)}>
              <MenuIcon />
            </button>
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
  {menu ? <ResponsiveMenu closeMenu={() => setMenu(false)} /> : ''}
  </>
    )
}
