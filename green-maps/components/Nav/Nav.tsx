'use client'

import { useEffect, useRef } from 'react'
import style from './Nav.module.css'

const Nav = () => {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.background = window.scrollY > 50
          ? 'rgba(15, 20, 26, 0.95)'
          : 'rgba(15, 20, 26, 0.85)'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav ref={navRef} id="navbar" className={style.navbar}>
      
      <div className={style.navLogo}>
        <div className={style.navDot}></div>
          <span>Green</span>Maps
      </div>
      <ul className={style.navLinks}>
        <li><a href="#hero">Início</a></li>
        <li><a href="#recycling">Coleta Seletiva</a></li>
        <li><a href="#ewaste">Lixo Eletrônico</a></li>
        <li><a href="#quiz">Interativo</a></li>
        <li><a href="#stats">Estatísticas</a></li>
      </ul>
      <button className={style.navCta} onClick={scrollToQuiz}>
        Participe
      </button>
    </nav>
  )
}

export default Nav