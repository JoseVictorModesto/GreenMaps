'use client'

import { useEffect } from 'react'

const AnimationObserver = () => {
  useEffect(() => {
    console.log('🔍 AnimationObserver iniciado (useEffect)')

    const animateCounter = (el: HTMLElement) => {
      if (el.dataset.animated === '1') return
      el.dataset.animated = '1'
      const target = parseFloat(el.dataset.target || '0')
      const isDecimal = String(target).includes('.')
      let startTime: number | null = null
      const duration = 1800

      const step = (ts: number) => {
        if (!startTime) startTime = ts
        const progress = Math.min((ts - startTime) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        const val = ease * target
        el.textContent = isDecimal ? val.toFixed(1) : Math.floor(val).toString()
        if (progress < 1) requestAnimationFrame(step)
        else el.textContent = isDecimal ? target.toFixed(1) : target.toString()
      }
      requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log('👁️ Elemento intersectado:', entry.target.className, entry.isIntersecting)
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')

          if (entry.target.classList.contains('problem-card')) {
            const statEl = entry.target.querySelector('.card-stat') as HTMLElement | null
            if (statEl) animateCounter(statEl)
          }
          if (entry.target.classList.contains('stat-card')) {
            const statNum = entry.target.querySelector('.stat-num') as HTMLElement | null
            if (statNum) animateCounter(statNum)
            const bar = entry.target.querySelector('.stat-bar') as HTMLElement | null
            if (bar && bar.dataset.width) {
              setTimeout(() => { bar.style.width = bar.dataset.width + '%' }, 200)
            }
          }
          if (entry.target.classList.contains('decomp-item')) {
            const bar = entry.target.querySelector('.decomp-bar') as HTMLElement | null
            if (bar) {
              const w = getComputedStyle(bar).getPropertyValue('--w') || '50%'
              setTimeout(() => { bar.style.width = w }, 200)
            }
          }
        }
      })
    }, { threshold: 0.15 })

    // Aguarda um pouco para garantir que o DOM esteja totalmente carregado
    setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>(
        '.problem-card, .stat-card, .benefit-item, .decomp-item, .quiz-question, .section-label, h2.section-title'
      )
      console.log(`📦 Elementos encontrados: ${elements.length}`)
      if (elements.length === 0) {
        console.warn('Nenhum elemento com essas classes encontrado. Verifique se as classes estáticas foram adicionadas aos componentes.')
        // Lista todas as classes presentes no body para depuração
        const allElements = document.querySelectorAll('[class]')
        const allClasses = new Set<string>()
        allElements.forEach(el => {
          el.classList.forEach(cls => allClasses.add(cls))
        })
        console.log('Classes presentes no DOM:', Array.from(allClasses))
      }
      elements.forEach(el => observer.observe(el))
    }, 100)

    return () => observer.disconnect()
  }, [])

  return null
}

export default AnimationObserver