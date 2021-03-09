import React from 'react'
import cls from './footer.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Footer() {
    return (
        <div className={cls.footer}>
            {/* <img src="images/noroot.webp" className={cls.light}/> */}
            <Container>
             <div className={cls.row}>

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

             <div className={cls.logo}>
            
                 {/* <h5 className={`${cls.header} ${cls.about}`}>About Us</h5> */}
                    <AnchorLink href="#header"><img src="images/muno.svg"/></AnchorLink>


                
                    {/* <div className={cls.text}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed libero ab fugiat nobis eveniet magni distinctio! Nisi, delectus numquam.</p>
                    </div>
                </div>
                <hr className={cls.hr}/>
                
                <div className={cls.post}>
                    <h5 className={`${cls.header} ${cls.postText}`}>post tags</h5>
                    <div className={cls.postLists}>
                        <ul className={cls.linksBtn}>
                            <li>app</li>
                            <li>buisness</li>
                            <li>corparation</li>
                            <li>creative</li>
                            <li>design</li>
                            <li>fashion</li>
                            <li>food</li>
                            <li>mobile</li>
                        </ul>
                    </div>
                </div>

                <hr className={cls.hr}/>

                <div className={cls.blog}>
                    <h5 className={`${cls.header} ${cls.postText}`}>blog categories</h5>
                    <div>
                        <ul className={cls.link}>
                        <li className={cls.lists}>
                            <Link href="/">
                                <a>app review</a>
                            </Link>
                        </li>
                        <li className={cls.lists}>
                            <Link href="/">
                                <a>audio post</a>
                            </Link>
                        </li>
                        <li className={cls.lists}>
                            <Link href="/">
                                <a>default post</a>
                            </Link>
                        </li>
                        <li className={cls.lists}>
                            <Link href="/">
                                <a>uncategorized</a>
                            </Link>
                        </li>
                        <li className={cls.lists}>
                            <Link href="/">
                                <a>video post</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
                <hr className={cls.hr}/>

                <div className={cls.contact}> 
                    <h5 className={`${cls.header} ${cls.postText}`}>contact info</h5>
                    <div>
                        <ul className={cls.contactInfo}>
                        <li>
                            <Link href="/">
                                <a>Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>(+066) 518 - 457 - 5181</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Contact@Gmail.com</a>
                            </Link>
                        </li>
                        </ul>
                    </div> */}
                </div>

 <div className={cls.lastText}>
 <div className={cls.ownerText}>
                    Created by 
                    <Link href='https://udevs.io/'>
                        <a className={cls.udevs}> Udevs</a>
                    </Link>

                </div>
                <div className={cls.text}>
                © 2021 ООО "Muno"
                Все права защищены
                <br/>
                <br/>
                </div>
 </div>
             </div>
            </Container>
        </div>
    )
}
