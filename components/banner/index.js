import React from 'react'
import cls from './banner.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'


export default function Banner() {
    return (
       <section id='banner'>
            <div className={cls.bg}>
            <Container>
                <div className={cls.landingPage}>
                    <div className={cls.textPage}>
                        {/* <h6># App Landing Page</h6> */}
                        <div className={cls.text}>
                            {/* <h1>The Best <span>Landing Page</span> For <br/> Your App</h1> */}
                            <h2 className={cls.h1}>Заказывайте, делитесь
                                и наслаждайтесь
                                видео-сообщениями от своих любимых инфлюенсеров
                            </h2>
                            <hr/>
                        </div>
                        <div className={cls.serviceText}>
                            <h2>Muno - Сервис по заказу видео-приветов, <br/> советов и поздравлений от знаменитостей</h2>
                        </div>
                        <div>
                           <ul className={cls.list}>
                               <li className={cls.pd}>
                                   <Link href="/">
                                       <a className={`${cls.btn} ${cls.btnWhite}`}>
                                           <img src="images/Download_on_the_App_Store_Badge_USUK_135x40.svg"/>
                                       </a>
                                   </Link>
                               </li>
                               <li className={cls.pd1}>
                                   <Link href="/">
                                       <a className={`${cls.btn} ${cls.btnBlack}`}>
                                           <img src="images/googleplaybadge2.webp"/>
                                       </a>
                                   </Link>
                               </li>
                           </ul>
                        </div>
                    </div>
                    <div className={cls.landingImg}>
                        <img src="images/Group_44_1.webp"/>
                    </div>
                </div>
      
            </Container>
        
        </div>
       </section>
    )
}
