import React from 'react'
import cls from './whiteBanner.module.css'
import Container from '@material-ui/core/Container'
import Link from 'next/link'

export default function WhiteBanner() {
    return (
        <div>
            <Container>
            <div className={cls.workText}>
                 Как это работает?
            </div>
            <div className={cls.app}>
           
                <div className={cls.imgPage}>
                        <img src="images/Group_45.webp"/>
                </div>
                <div className={cls.textPage}>
                      
                        <div>
                            <h3>Скачайте приложение "ШАТАУТ"</h3>
                        </div>
                        <div className={cls.p}>
                        И выберите интересную Вам знаменитость
                        </div>
                        <div>
                            <ul className={cls.list}>
                                <li className={cls.iconAbout}>
                                   <Link href="/">
                                       <a>
                                       <img src="images/1 (4).png"/>
                                       </a>
                                   </Link>
                                </li>
                                <li className={cls.iconAbout}>
                                   <Link href="/">
                                       <a>
                                       <img src="images/2 (4).png"/>
                                       </a>
                                   </Link>
                                </li>
                                <li className={cls.iconAbout}>
                                   <Link href="/">
                                       <a>
                                       <img src="images/3 (2).png"/>
                                       </a>
                                   </Link>
                                </li>
                            </ul>
                            <Link href="/" >
                                <a className={cls.btn}>learn more</a>
                            </Link>
                        </div>
                </div>
            </div>
            </Container>
        </div>
    )
}
