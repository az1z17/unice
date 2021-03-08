import React from 'react'
import cls from './banner.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

export default function Banner() {
    return (
        <div className={cls.bg}>
            <Container>
                <div className={cls.landingPage}>
                    <div className={cls.textPage}>
                        <h6># App Landing Page</h6>
                        <div>
                            <h1>The Best <span>Landing Page</span> For <br/> Your App</h1>
                            <hr/>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus dolorum voluptate doloremque, laboriosam eius, tenetur autem commodi voluptatum cupiditate amet quod pariatur error dicta, id perferendis explicabo sequi incidunt!</p>
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
                               <li>
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
    )
}
