import React from 'react'
import cls from './whiteBanner.module.css'
import Container from '@material-ui/core/Container'
import Link from 'next/link'

export default function WhiteBanner() {
  return (
    <section id='whiteBanner'>
      <div className={cls.banner}>
        <Container>
          <div className={cls.text}>
            <h1>
              Как это <span className={cls.muno}>работает ?</span>
            </h1>
            <hr />
          </div>
        </Container>
      </div>
    </section>
  )
}
