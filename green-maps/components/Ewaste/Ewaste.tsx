'use client'

import style from './Ewaste.module.css'

const Ewaste = () => {
  return (
    <section id="ewaste" className={style.ewaste}>
      <div className={style.sectionLabel}>Lixo Eletrônico</div>
      <h2 className={style.sectionTitle}>
        <em>e-Waste</em> —<br />A crise invisível
      </h2>
      <div className={style.ewasteInner}>
        <div>
          <p style={{ color: 'var(--gray1)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            O lixo eletrônico contém metais pesados como <strong style={{ color: 'var(--blue)' }}>mercúrio</strong>,{' '}
            <strong style={{ color: 'var(--blue)' }}>chumbo</strong> e <strong style={{ color: 'var(--blue)' }}>cádmio</strong>{' '}
            que contaminam solo e lençóis freáticos por décadas. Descartar incorretamente esses itens é crime ambiental.
          </p>
          <div className={style.ewasteStats}>
            <div className={style.estat}>
              <span className={style.estatIcon}>📱</span>
              <div>
                <div className={style.estatNum}>54 Mi</div>
                <div className={style.estatLabel}>toneladas geradas por ano no mundo</div>
              </div>
            </div>
            <div className={style.estat}>
              <span className={style.estatIcon}>♻️</span>
              <div>
                <div className={style.estatNum}>17%</div>
                <div className={style.estatLabel}>é reciclado formalmente</div>
              </div>
            </div>
            <div className={style.estat}>
              <span className={style.estatIcon}>🇧🇷</span>
              <div>
                <div className={style.estatNum}>2,1 Mi</div>
                <div className={style.estatLabel}>toneladas geradas pelo Brasil/ano</div>
              </div>
            </div>
            <div className={style.estat}>
              <span className={style.estatIcon}>☠️</span>
              <div>
                <div className={style.estatNum}>70%</div>
                <div className={style.estatLabel}>das substâncias tóxicas em aterros vêm do e-waste</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ewaste