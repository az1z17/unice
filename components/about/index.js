import React from 'react'
import Container from '@material-ui/core/Container'
import Link from 'next/link'
import cls from './about.module.css'

export default function About() {
    return (
<section id='about'>
<div className={cls.about}>
            <Container>
                <div className={cls.title}>
                Что такое 
                <Link href="/">
                    <a className={cls.muno}> Muno</a>
                </Link>
                </div>
                <h1 className={cls.text}>
                Muno - это сервис, где фанаты могут заказать персонализированные видео поздравления от своих любимых знаменитостей, актеров, блогеров или спортсменов. Наша миссия - создать самые аутентичные и запоминающиеся впечатления.
                <br/>
                <br/>
                Muno идеально подходит для любого случая! Хочешь поздравить своего друга с днем рождения? Удивить своих близких? Или просто услышать что-нибудь от твоей любимой звезды? Звезды будут рады записать поздравление для тебя!
                <br/>
                <br/>
                Это не компьютерная графика и не фотошоп - звезды записывают видео специально для Вас!
                </h1>
            </Container>
        </div>
</section>
    )
}
