import React from 'react'
import cls from './features.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function Features() {
    return (
        <div>
            <Container>
                <div className={cls.logo}>
                    <img src="images/2.png" alt=""/>
                </div>
                <div className={cls.title}>
                    <h6>
                        <span>
                            features
                        </span>
                    </h6>
                </div>
                <div className={cls.textCenter}>
                 <h2>
                    powerful features
                 </h2>
                </div>

                {/*  */}

                <div className={cls.card}>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/2-1.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>fast and optimized</h4>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/2-2.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>well documented</h4>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.cardBody}>
                        <div className={cls.service}>
                            <div className={cls.imgBlock}>
                                <img src="images/2-3.png" />
                            </div>
                            <div className={cls.textBlock}>
                                <h4>easy integration</h4>
                                <p>Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  */}
                <div className={cls.card}>
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
                </div>
            </Container>
        </div>
    )
}
