import { Container } from '@material-ui/core'
import React from 'react'
import cls from './screen.module.css'



export default function Screen() {
    return (
        <div>
            <Container>
            <div className={cls.logo}>
                    <img src="images/2.png" alt=""/>
                </div>
                <div className={cls.title}>
                    <h6>
                        <span>
                           screen shot
                        </span>
                    </h6>
                </div>
                <div className={cls.textCenter}>
                 <h2>
                   screen shot
                 </h2>
                </div>
                <div className={cls.row}>
                    <img src="images/2 (2).png"/>
                    <img src="images/1 (2).png"/>
                    <img src="images/2 (2).png"/>
                </div>
                <div className={cls.logo}>
                    <img src="images/2.png" alt=""/>
                </div>
                <div className={cls.title}>
                    <h6>
                        <span>
                          our team
                        </span>
                    </h6>
                </div>
                <div className={cls.textCenter}>
                 <h2>
                   our team members
                 </h2>
                </div>
                
                <div className={cls.membersAll}>
                <div className={cls.m1}>
                <div className={cls.members}>
                     <div className={cls.card}>
                         <div className={cls.overflow}>
                        <img className={cls.team} src="images/1 (1).png"/>
                        <div className={cls.setTeam}>
                        <img className={cls.wave} src="images/hover-wave.png"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={cls.setRelative}>
                    <div className={cls.setAbs}></div>
                </div>
                <div className={cls.employee}>
                    <h4 className={cls.name}>ken pitersan</h4>
                    <h6 className={cls.post}>seniour UI/XI designer</h6>
                </div>
                </div>
                <div>
                <div className={cls.members}>
                     <div className={cls.card}>
                         <div className={cls.overflow}>
                        <img className={cls.team} src="images/2 (1).png"/>
                        <div className={cls.setTeam}>
                        <img className={cls.wave} src="images/hover-wave.png"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={cls.setRelative}>
                    <div className={cls.setAbs}></div>
                </div>
                <div className={cls.employee}>
                    <h4 className={cls.name}>ken pitersan</h4>
                    <h6 className={cls.post}>seniour UI/XI designer</h6>
                </div>
                </div>
                <div className={cls.m1}>
                <div className={cls.members}>
                     <div className={cls.card}>
                         <div className={cls.overflow}>
                        <img className={cls.team} src="images/3.png"/>
                        <div className={cls.setTeam}>
                        <img className={cls.wave} src="images/hover-wave.png"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={cls.setRelative}>
                    <div className={cls.setAbs}></div>
                </div>
                <div className={cls.employee}>
                    <h4 className={cls.name}>ken pitersan</h4>
                    <h6 className={cls.post}>seniour UI/XI designer</h6>
                </div>
                </div>
                <div>
                <div className={cls.members}>
                     <div className={cls.card}>
                         <div className={cls.overflow}>
                        <img className={cls.team} src="images/4.png"/>
                        <div className={cls.setTeam}>
                        <img className={cls.wave} src="images/hover-wave.png"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={cls.setRelative}>
                    <div className={cls.setAbs}></div>
                </div>
                <div className={cls.employee}>
                    <h4 className={cls.name}>ken pitersan</h4>
                    <h6 className={cls.post}>seniour UI/XI designer</h6>
                </div>
                </div>
                </div>
            </Container>
        </div>
    )
}
