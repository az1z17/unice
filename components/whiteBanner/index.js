import React from 'react'
import cls from './whiteBanner.module.css'
import Container from '@material-ui/core/Container'
import Link from 'next/link'

export default function WhiteBanner() {
    return (
      <section id='whiteBanner'>
            <div className={cls.banner}>
            <Container>
            <div className={cls.workText}>
                 Как это работает?
            </div>
            <div className={`${cls.app} ${cls.munoApp}`}>
           
                <div className={cls.imgPage1}>
                        <img src="images/Group_45.webp"/>
                </div>
                <div className={cls.textPage}>
                      
                        <div className={cls.dowlandText}>
                            <h3>Скачайте приложение <br/> "Muno"</h3>
                        </div>
                        <div className={cls.p}>
                        И выберите интересную Вам знаменитость
                        </div>
                </div>
            </div>
            </Container>
            <div className={cls.bgFb}>
        <Container>
            <div className={cls.row}>
                <div className={cls.text}>
                    <h3>Оформите заказ</h3>
                <div className={cls.paragText}>
                Заполните и подтвердите заказ, <br/> знаменитость получит Ваш запрос и <br/> запишет видео специально для Вас
                </div>
                </div>
                <div className={cls.imgBlock}>
                <img src="images/Group_45.webp"/>
                </div>
                </div>
                </Container>
            </div>
<Container>
            <div className={cls.app}>
           
           <div className={cls.imgPage}>
                   <img src="images/Group_46_1.webp"/>
           </div>
           <div className={cls.textPage}>
                 
                   <div className={cls.dowlandText}>
                       <h3>
                       Поделитесь видео <br/>
                        со своими друзьями
                       </h3>
                   </div>
                   <div className={`${cls.p} ${cls.pLast}`}>
                   Публикуйте видео в социальных сетях и <br/> наслаждайтесь видео сами!
                   </div>
           </div>
       </div>
            </Container>
        </div>
      </section>
    )
}
