import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
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
              <MenuIcon />
            </button>
                <div className={cls.brand}>
                <Link href="/" >
                    <a className={cls.logo}>
                        
                        <img src="images/muno.svg"/>
                    </a>
                </Link>
                </div>
                <div className={cls.blogs}>
                    <ul className={cls.list}>
                    <AnchorLink href='#banner'><li>Главный страница</li></AnchorLink>
                    <AnchorLink href='#about'><li>Что такое Muno?</li></AnchorLink>
                    <AnchorLink href='#whiteBanner'><li>Как это работает?</li></AnchorLink>
                    <AnchorLink href='#features'><li>Все что нужно знать</li></AnchorLink>
                        {/* <li>PORTFOLIO</li> */}
                        {/* <li>FEATURES</li> */}
                    </ul>
                </div>
              
            </nav>
            </Container>
  </div>
  {menu ? <ResponsiveMenu closeMenu={() => setMenu(false)} /> : ''}
  </section>
    )
}
