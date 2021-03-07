import React from 'react'
import cls from './plan.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

export default function Plan() {
  
    return (
        <div>
            <Container>
            <div className={cls.logo}>
                    <img src="images/2.png" alt=""/>
                </div>
                <div className={cls.title}>
                    <h6>
                        <span>
                            pricing
                        </span>
                    </h6>
                </div>
                <div className={cls.textCenter}>
                 <h2>
                    our plan
                 </h2>
                </div>
                <div className={cls.row}>
                <div className={cls.MediumCard}>
                        <div className={cls.cardTitle}>
                            <VerifiedUserIcon className={cls.iconVac}/>
                            <h3>buisness</h3>
                        </div>
                        <div className={cls.cardBody}>
                            <h5>easy installations</h5>
                            <h5>unlimited support</h5>
                            <h5>free forever</h5>
                        </div>
                        <div className={cls.cardFooter}>
                            <h6>$ <span className={cls.large}>999</span>/month</h6>
                        </div>
                        <Link href="/">
                            <a className={cls.btn}>purchase</a>
                        </Link>
                     </div>
               
                      <div className={cls.MediumCard}>
                        <div className={cls.cardTitle}>
                            <VerifiedUserIcon className={cls.iconVac}/>
                            <h3>free</h3>
                        </div>
                        <div className={cls.cardBody}>
                            <h5>easy installations</h5>
                            <h5>unlimited support</h5>
                            <h5>free forever</h5>
                        </div>
                        <div className={cls.cardFooter}>
                            <h6>$ <span className={cls.large}>0</span>/month</h6>
                        </div>
                        <Link href="/">
                            <a className={cls.btn}>purchase</a>
                        </Link>
                     </div>
                
                     
                     {/*  */}

                     <div className={cls.MediumCard}>
                        <div className={cls.cardTitle}>
                            <VerifiedUserIcon className={cls.iconVac}/>
                            <h3>medium</h3>
                        </div>
                        <div className={cls.cardBody}>
                            <h5>easy installations</h5>
                            <h5>unlimited support</h5>
                            <h5>free forever</h5>
                        </div>
                        <div className={cls.cardFooter}>
                            <h6>$ <span className={cls.large}>99</span>/month</h6>
                        </div>
                        <Link href="/">
                            <a className={cls.btn}>purchase</a>
                        </Link>
                     </div>
                </div>
            </Container>
        </div>
    )
}
