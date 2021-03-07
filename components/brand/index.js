import React from 'react'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import cls from './brand.module.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Brand() {
    return (
        <div>
               <Container>
            <div className={cls.logo}>
                    <img src="images/2.png" alt=""/>
                </div>
                <div className={cls.title}>
                    <h6>
                        <span>
                           brand logo
                        </span>
                    </h6>
                </div>
                <div className={cls.textCenter}>
                 <h2>
                   trusted us
                 </h2>
                </div>
                {/*  */}

                <div className={cls.programms}>
                    <img src="images/1 (3).png"/>
                    <img src="images/2 (3).png"/>
                    <img src="images/3 (1).png"/>
                    <img src="images/4 (1).png"/>
                    <img src="images/5.png"/>
                </div>

                <div className={cls.container}>
                    <div className={cls.row}>
                        <div className={cls.offset}>
                            <div className={cls.subscribe}>
                                <div className={cls.centerContent}>
                                    <div className={cls.formGroup}>
                                        <div className={cls.flex}>
                                            <MailOutlineIcon className={cls.icon}/>
                                            <input type="email" name="email" placeholder="example@gmail.com" className={cls.form}/>
                                            <div className={cls.btn}>
                                                <button>subscribe now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
        </div>
    )
}
