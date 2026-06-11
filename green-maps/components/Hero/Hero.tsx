'use client'

import { useEffect, useRef } from 'react'
import style from './Hero.module.css'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Partículas flutuantes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random()
    }))

    let animationId: number

    const draw = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, width, height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(25, 228, 111, ${p.a * 0.4})`
        ctx.fill()
      })

      // Conexões entre partículas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(25, 228, 111, ${(1 - dist / 100) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToProblem = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={style.hero}>
      <canvas id="particles" ref={canvasRef} className={style.particlesCanvas}></canvas>
      <div className={style.heroBg}></div>
      <div className={style.heroGrid}></div>
      <div className={style.heroOrb}></div>
      <div className={style.heroContent}>
        <div className={style.heroTag}>
          <span className={style.dot}></span>Conscientização Ambiental 2026
        </div>
        <h1 className={style.heroTitle}>
          O lixo não<br />desaparece<br /><em>do planeta</em>
        </h1>
        <p className={style.heroSub}>
          Cada resíduo descartado incorretamente deixa uma marca no futuro. Descubra como suas escolhas moldam o meio ambiente.
        </p>
        <div className={style.heroActions}>
          <button className={style.btnPrimary} onClick={scrollToProblem}>Descobrir o problema</button>
          <button className={style.btnOutline} onClick={scrollToQuiz}>Fazer o quiz</button>
        </div>
        <div className={style.heroScroll}>
          <div className={style.heroScrollLine}></div>
          <span className={style.heroScrollText}>Role para descobrir</span>
        </div>
      </div>
    </section>
  )
}

export default Hero