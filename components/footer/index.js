import React from 'react'
import cls from './footer.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function Footer() {
    return (
        <div className={cls.footer}>
            <Container>
             <div className={cls.row}>
             <div className={cls.logo}>
            
                 <h5 className={`${cls.header} ${cls.about}`}>About Us</h5>
                 <hr className={cls.hr}/>
                    <img src="images/1.png"/>
                    <div className={cls.text}>
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
                    </div>
                </div>
             </div>
            </Container>
        </div>
    )
}
