"use client";

import { useEffect, useRef, useState } from 'react';
import style from './Benefits.module.css';

const Benefits = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // ativa quando 30% da seção estiver visível
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

  const benefitsData = [
    {
      icon: '🌿',
      title: 'Redução da poluição',
      desc: 'Reciclar reduz drasticamente a quantidade de resíduos em aterros e a emissão de gases de efeito estufa.',
    },
    {
      icon: '⚡',
      title: 'Economia de energia',
      desc: 'Fabricar alumínio reciclado usa 95% menos energia do que a partir do minério bruto.',
    },
    {
      icon: '💼',
      title: 'Geração de empregos',
      desc: 'O setor de reciclagem gera mais empregos por tonelada do que qualquer outra forma de gestão de resíduos.',
    },
    {
      icon: '💧',
      title: 'Proteção das águas',
      desc: 'Evita a contaminação de rios, lagos e lençóis freáticos por substâncias tóxicas dos aterros.',
    },
    {
      icon: '🦋',
      title: 'Biodiversidade',
      desc: 'Menos desmatamento e mineração preservam habitats e espécies ameaçadas em todo o planeta.',
    },
    {
      icon: '🌡️',
      title: 'Clima mais estável',
      desc: 'Reduzir lixo em aterros diminui a produção de metano — um gás 80x mais potente que o CO₂.',
    },
  ];

  return (
    <section id="benefits" ref={sectionRef} className={style.benefits}>
      <div className={style.sectionLabel}>Por que reciclar?</div>
      <h2 className={style.sectionTitle}>
        Os benefícios de<br />um <em>futuro melhor</em>
      </h2>
      <div className={style.benefitsGrid}>
        {benefitsData.map((item, index) => (
          <div
            key={index}
            className={`${style.benefitItem} ${hasAnimated ? style.visible : ''}`}
            style={{ '--i': index } as React.CSSProperties}
          >
            <div className={style.benefitIcon}>{item.icon}</div>
            <div>
              <div className={style.benefitTitle}>{item.title}</div>
              <div className={style.benefitDesc}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;