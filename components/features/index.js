import React from 'react'
import cls from './features.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function Features() {
    return (
        <section id='features'>
            <div className={cls.row}>
            <Container>
                <div className={cls.logo}>
                    {/* <img src="images/2.png" alt=""/> */}
                </div>
                <div className={cls.title}>
                    <h1>
                        <span>
                        Все что нужно знать
                        </span>
                    </h1>
                </div>

                {/*  */}

                <div className={cls.card}>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/giftbox.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>
                                Идеально подходит
                                для подарка или сюрприза
                                </h4>
                                  <p>Поздравить с днем рождения, разыграть друзей, спросить совета у знаменитости или вызвать своих врагов на рэп-баттл?</p>                  
                              </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/salary.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>
                                Оплата происходит только в момент, когда Вы получите готовое видео
                                </h4>
                                <p>
                                Для безопасности обеих сторон все сделки совершаются по принципу "Безопасная сделка."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/social-media.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>
                                Не нашли знаменитость которую искали - не беда! Сообщите ей об этом в социальных сетях
                                </h4>
                                <p>
                                Ваш любимый артист, блогер или спортсмен не узнает, что Вы хотите получить от него видео, пока Вы ему сами об этом не скажете.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  */}
                {/* <div className={cls.card}>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/2-4.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>team collabration</h4>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/2-5.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>user permissions</h4>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/2-6.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>unlimited storage</h4>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Container>
        </div>
        </section>
    )
}
