import React from 'react'
import cls from './qualityApp.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function QualityApp() {
    return (
        <div>
            <Container>
                <div className={cls.row}>
                    <div className={cls.setOrder}>
                        <div className={cls.abouts}>
                            <div>
                                <div className={cls.headText}>
                                    <h3>High Quality Functions</h3>
                                </div>
                                <div className={cls.subText}>
                                    <p>You can now use all Social Network from this Lunatic app also. Writers and stars of Veep have responded incredulous to the news an Australian politician required stitches after knocking himself unconscious while laughing.</p>
                                </div>
                                <ul className={cls.collection}>
                                    <li className={cls.aboutIcon}>
                                        <Link href="/">
                                            <a className={cls.centerContent}>
                                                <h4 className={cls.quality}>2 M</h4>
                                                <h6 className={cls.users}>users</h6>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={cls.aboutIcon}>
                                        <Link href="/">
                                            <a className={cls.centerContent}>
                                                <h4 className={cls.quality}>2.5 M</h4>
                                                <h6 className={cls.users}>download</h6>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <Link href="/">
                                    <a className={cls.btn}>learn more</a>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className={cls.imgBlock}>
                        <img src="images/l-2.png" alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    )
}
