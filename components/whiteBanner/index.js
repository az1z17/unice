import React from 'react'
import cls from './whiteBanner.module.css'
import Container from '@material-ui/core/Container'
import Link from 'next/link'

export default function WhiteBanner() {
    return (
        <div>
            <Container>
            <div className={cls.app}>

                <div className={cls.imgPage}>
                        <img src="images/Group_45.webp"/>
                </div>
                <div className={cls.textPage}>
                        <div>
                            <h6>our progress</h6>
                        </div>
                        <div>
                            <h3>great application ever</h3>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum numquam minima fuga enim animi nihil debitis, earum sed, ducimus magnam accusantium exercitationem delectus corporis impedit quaerat esse fugit et minus fugiat, iste vel aut voluptates? Obcaecati omnis praesentium et.</p>
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
