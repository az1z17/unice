import React from 'react'
import cls from './review.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'


export default function Review() {
    return (
        <div>
            <Container>
            <div className={cls.logo}>
                    <img src="images/2.png" alt=""/>
                </div>
                <div className={cls.title}>
                    <h6>
                        <span>
                            client review
                        </span>
                    </h6>
                </div>
                <div className={cls.textCenter}>
                 <h2>
                    our clients love us
                 </h2>
                </div>

                <div className={cls.card}>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/1 (1).png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h5 className={cls.name}>Ashekur Rahman</h5>
                                <h6 className={cls.post}>art director</h6>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/2 (1).png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h5 className={cls.name}>Ashekur Rahman</h5>
                                <h6 className={cls.post}>art director</h6>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/3.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h5 className={cls.name}>Ashekur Rahman</h5>
                                <h6 className={cls.post}>art director</h6>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
