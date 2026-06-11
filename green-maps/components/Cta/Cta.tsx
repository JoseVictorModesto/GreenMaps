'use client'

import style from './Cta.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Cta = () => {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  const router = useRouter()
  const irParaLocais = () => {
  router.push('/locais')
}

  return (
    <section id="cta" className={style.cta}>
      <div className={style.ctaInner}>
        <p className={style.sectionLabel} style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          O futuro começa agora
        </p>
        <h2 className={style.ctaTitle}>
          O futuro depende das <em style={{ color: 'var(--green)' }}>escolhas</em> de hoje
        </h2>
        <p className={style.ctaSub}>
          Compartilhe este conteúdo, adote hábitos sustentáveis e faça parte da mudança que o planeta precisa.
        </p>
        <div className={style.ctaActions}>
          <button className={style.btnPrimary}>🔗 Compartilhar</button>
          <button className={style.btnSecondary}>
            <Link href="/locais">Pontos de coleta</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta







