import style from './Problem.module.css'
const Problem = () => {
  return (
    <section id="problem" className={style.problem}>
      <div className={`${style.sectionLabel} section-label`}>O Problema Global</div>
      <h2 className={`${style.sectionTitle} section-title`}>
        O mundo afoga-se<br />em <em>resíduos</em>
      </h2>
      <div className={style.problemGrid}>
        <div className={`${style.problemCard} problem-card`} style={{ '--i': 0 } as React.CSSProperties}>
          <div className={style.cardIcon}>🌍</div>
          <div className={`${style.cardStat} card-stat`} data-target="2.1">0</div>
          <div className={style.cardLabel}>bilhões de toneladas/ano</div>
          <div className={style.cardDesc}>O mundo produz mais de 2 bilhões de toneladas de lixo sólido por ano — um número que deve crescer 70% até 2050.</div>
        </div>
        <div className={`${style.problemCard} problem-card`} style={{ '--i': 1 } as React.CSSProperties}>
          <div className={style.cardIcon}>🌊</div>
          <div className={`${style.cardStat} card-stat`} data-target="14">0</div>
          <div className={style.cardLabel}>milhões t de plástico/ano</div>
          <div className={style.cardDesc}>14 milhões de toneladas de plástico chegam aos oceanos anualmente, ameaçando toda a cadeia marinha.</div>
        </div>
        <div className={`${style.problemCard} problem-card`} style={{ '--i': 2 } as React.CSSProperties}>
          <div className={style.cardIcon}>⚡</div>
          <div className={`${style.cardStat} card-stat`} data-target="54">0</div>
          <div className={style.cardLabel}>milhões t lixo eletrônico</div>
          <div className={style.cardDesc}>O lixo eletrônico é o resíduo de crescimento mais rápido do mundo. Apenas 17% é reciclado corretamente.</div>
        </div>
        <div className={`${style.problemCard} problem-card`} style={{ '--i': 3 } as React.CSSProperties}>
          <div className={style.cardIcon}>🏙️</div>
          <div className={`${style.cardStat} card-stat`} data-target="60">0</div>
          <div className={style.cardLabel}>% vai para aterros</div>
          <div className={style.cardDesc}>No Brasil, 60% dos resíduos ainda terminam em aterros ou lixões — perpetuando um ciclo insustentável.</div>
        </div>
      </div>

      <div className={style.decompTimeline} style={{ marginTop: '5rem' }}>
        <div className={`${style.sectionLabel} section-label`} style={{ marginBottom: '2rem' }}>Tempo de Decomposição</div>
        
        <div className={`${style.decompItem} decomp-item`} style={{ '--i': 0 } as React.CSSProperties}>
          <span className={style.decompIcon}>🍎</span>
          <span className={style.decompName}>Resto orgânico</span>
          <div className={style.decompBarWrap}>
            <div className={`${style.decompBar} decomp-bar`} style={{ background: '#19E46F', '--w': '3%' } as React.CSSProperties}></div>
          </div>
          <span className={style.decompTime} style={{ color: '#19E46F' }}>6 meses</span>
        </div>
        <div className={`${style.decompItem} decomp-item`} style={{ '--i': 1 } as React.CSSProperties}>
          <span className={style.decompIcon}>📰</span>
          <span className={style.decompName}>Papel jornal</span>
          <div className={style.decompBarWrap}>
            <div className={`${style.decompBar} decomp-bar`} style={{ background: '#60a5fa', '--w': '8%' } as React.CSSProperties}></div>
          </div>
          <span className={style.decompTime} style={{ color: '#60a5fa' }}>6 anos</span>
        </div>
        <div className={`${style.decompItem} decomp-item`} style={{ '--i': 2 } as React.CSSProperties}>
          <span className={style.decompIcon}>🥤</span>
          <span className={style.decompName}>Lata de alumínio</span>
          <div className={style.decompBarWrap}>
            <div className={`${style.decompBar} decomp-bar`} style={{ background: '#FACC15', '--w': '40%' } as React.CSSProperties}></div>
          </div>
          <span className={style.decompTime} style={{ color: '#FACC15' }}>200 anos</span>
        </div>
        <div className={`${style.decompItem} decomp-item`} style={{ '--i': 3 } as React.CSSProperties}>
          <span className={style.decompIcon}>🧴</span>
          <span className={style.decompName}>Garrafa PET</span>
          <div className={style.decompBarWrap}>
            <div className={`${style.decompBar} decomp-bar`} style={{ background: '#f87171', '--w': '80%' } as React.CSSProperties}></div>
          </div>
          <span className={style.decompTime} style={{ color: '#f87171' }}>400 anos</span>
        </div>
        <div className={`${style.decompItem} decomp-item`} style={{ '--i': 4 } as React.CSSProperties}>
          <span className={style.decompIcon}>🛍️</span>
          <span className={style.decompName}>Sacola plástica</span>
          <div className={style.decompBarWrap}>
            <div className={`${style.decompBar} decomp-bar`} style={{ background: '#EF4444', '--w': '90%' } as React.CSSProperties}></div>
          </div>
          <span className={style.decompTime} style={{ color: '#EF4444' }}>450 anos</span>
        </div>
        <div className={`${style.decompItem} decomp-item`} style={{ '--i': 5 } as React.CSSProperties}>
          <span className={style.decompIcon}>🪟</span>
          <span className={style.decompName}>Vidro comum</span>
          <div className={style.decompBarWrap}>
            <div className={`${style.decompBar} decomp-bar`} style={{ background: '#9CA3AF', '--w': '100%' } as React.CSSProperties}></div>
          </div>
          <span className={style.decompTime} style={{ color: '#9CA3AF' }}>5.000 anos</span>
        </div>
      </div>
    </section>
  )
}


export default Problem