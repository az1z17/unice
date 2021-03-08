import { Container } from '@material-ui/core'
import React , { useState } from 'react'
import cls from './responsiveMenu.module.css'
import Link from 'next/link'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function ResponsiveMenu({ closeMenu }) {
const [langMenu, setLangMenu] = useState(false); 

    return (
        <Container>
            <div className={cls.mobileBlock}>
                <div className={cls.header}>
                    <div className={` ${cls.siteHeader} ${cls.lang}`}>
                        <button
                        onClick={() => setLangMenu(!langMenu)} 
                        className={cls.langButton}>
                        <div className={cls.siteHeader}>
                            <div className={cls.langItem}>
                                <img src="images/russia.svg"/>
                            </div>
                            <div className={cls.langName}>Русский</div> 
                            <div >
                                <ExpandMoreIcon className={cls.langArrow}/>
                            </div>
                            <div className={`${cls.langList} ${langMenu ? cls.show : ''}`}>
                                <Link href="/">
                                    <a>
                                        <div className={cls.langItemList}>
                                            <div className={cls.itemLang}>
                                                <img src="images/uzb.svg"/>
                                            </div>
                                            <div className={cls.langItemName}>
                                            Узбекский
                                            </div>
                                         </div>
                                     </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        <div className={`${cls.langItemList} ${cls.langBritish}`}>
                                            <div className={cls.itemLang}>
                                                <img src="images/britain.png"/>
                                            </div>
                                            <div className={cls.langItemName}>
                                                Английский
                                            </div>
                                        </div>                                    
                                    </a>                                
                                </Link>
                            </div>
                        </div>
                        </button>
                    </div>
                    <div className={cls.close} onClick={closeMenu}><CloseIcon className={cls.closesIcon}/>Закрыть</div>
                </div>
                <nav className={`${cls.menu} ${cls.top} ${cls.nav}`}>
                    <ul className={cls.navItem}>
                        <li className={cls.hasChild}>
                            <Link href="/">
                                <a>Доставка по России
                                    <ChevronRightIcon className={`${cls.arrowButton} ${cls.positionArrow}`}/>
                                </a>
                                </Link>
                            <ul className={cls.pageChild} onClick={closeMenu}>
                                <li className={cls.currentPage}>
                                    <Link href="/services"><a>Экспресс-доставка</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Доставка грузов</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Доставка документов</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>По городам</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Популярные направления</a></Link>
                                </li>
                            </ul>
                        </li>
                        <li className={cls.hasChild}>
                            <Link href="/">
                            <a>Международная доставка
                                <ChevronRightIcon className={`${cls.arrowButton} ${cls.positionDeliver}`}/>
                            </a>
                            </Link>
                            <ul className={cls.pageChild} onClick={closeMenu}>
                                <li>
                                    <Link href="/services"><a>Экспресс-доставка</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Импорт грузов</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Популярные направления</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Доставка тяжелых грузов</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Экспорт для интернет-магазинов</a></Link>
                                </li>
                            </ul>
                        </li>
                        <li className={cls.hasChild}>
                            <Link href="/"><a>Дополнительные услуги и сборы
                            <ChevronRightIcon className={`${cls.arrowButton} ${cls.positionDeliver}`}/>
                                </a></Link>
                            <ul className={cls.pageChild} onClick={closeMenu} >
                                <li>
                                    <Link href="/services"><a>Дополнительные услуги</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Дополнительные сборы</a></Link>
                                </li>
                            </ul>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/services"><a>Таможенное декларирование</a></Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/services"><a>Условия доставки</a></Link>
                        </li>
                        <li className={cls.hasChild}>
                            <Link href="/"><a>2Полезная информация
                             <ChevronRightIcon className={`${cls.arrowButton} ${cls.positionDeliver}`}/> 
                                </a></Link>
                            <ul className={cls.pageChild} onClick={closeMenu}>
                                <li>
                                    <Link href="/services"><a>Центр справочной информации</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Журнал «Доставлено DHL»</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Пресс-релизы</a></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav className={`${cls.menu} ${cls.bottom}`}>
                    <ul >
                        <li onClick={closeMenu}>
                            <Link href="/about"><a>О компании</a></Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/calculator"><a>Калькулятор</a></Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/tracking"><a>Отслеживание</a></Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/tariffs"><a>Тарифы</a></Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/offers-single"><a>Спецпредложения</a></Link>
                        </li>
                        <li onClick={closeMenu}>
                            <Link href="/contacts"><a>Контакты</a></Link>
                        </li>
                    </ul>
                    
                </nav>
            </div>
        </Container>
    )
}
       
