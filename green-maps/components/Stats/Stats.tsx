"use client";

import { useEffect, useRef, useState } from 'react';
import style from './Stats.module.css';

const Stats = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounters();
          startBars();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounters = () => {
    const counters = document.querySelectorAll(`.${style.statNum}`);
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      let current = 0;
      const increment = target / 60;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };
      requestAnimationFrame(updateCounter);
    });
  };

  const startBars = () => {
    const bars = document.querySelectorAll(`.${style.statBar}`);
    bars.forEach((bar) => {
      const width = bar.getAttribute('data-width') || '0';
      (bar as HTMLElement).style.width = `${width}%`;
    });
  };

  return (
    <section id="stats" ref={sectionRef} className={style.stats}>
      <div className={style.sectionLabel}>Dados Globais</div>
      <h2 className={style.sectionTitle}>
        Os números<br />que <em>chocam</em>
      </h2>
      <div className={style.statsGrid}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${style.statCard} ${hasAnimated ? style.visible : ''}`}
            style={{ '--i': index } as React.CSSProperties}
          >
            <div className={style.statNum} data-target={card.target}>0</div>
            <div className={style.statUnit}>{card.unit}</div>
            <div className={style.statLabel}>{card.label}</div>
            <div className={style.statBarWrap}>
              <div className={style.statBar} data-width={card.barWidth}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const cardsData = [
  { target: 91, unit: '%', label: 'do plástico nunca foi reciclado', barWidth: '91' },
  { target: 3.5, unit: 'Mi', label: 'toneladas de lixo produzidas por dia', barWidth: '70' },
  { target: 1, unit: 'Mi', label: 'aves marinhas mortas por plástico/ano', barWidth: '45' },
  { target: 80, unit: '%', label: 'dos resíduos podem ser reciclados', barWidth: '80' },
  { target: 5, unit: 'x', label: 'mais lixo per capita nos últimos 40 anos', barWidth: '60' },
  { target: 30, unit: '%', label: 'de redução energética ao reciclar alumínio', barWidth: '30' },
];

export default Stats;