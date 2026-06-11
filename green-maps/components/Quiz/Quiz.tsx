'use client'

import { useState, useEffect } from 'react'
import style from './Quiz.module.css'

const questions = [
  {
    q: "Qual cor de lixeira é usada para papel?",
    opts: ["Azul", "Vermelho", "Verde", "Amarelo"],
    correct: 0,
    exp: "A lixeira AZUL é destinada ao papel e papelão."
  },
  {
    q: "Quanto tempo uma garrafa PET leva para se decompor?",
    opts: ["10 anos", "50 anos", "400 anos", "1.000 anos"],
    correct: 2,
    exp: "Uma garrafa PET pode levar até 400 anos."
  },
  {
    q: "O que NÃO deve ser descartado no lixo comum?",
    opts: ["Restos de comida", "Papel sujo", "Pilhas e baterias", "Guardanapos usados"],
    correct: 2,
    exp: "Pilhas contêm metais tóxicos, devem ir a pontos de coleta específicos."
  },
  {
    q: "Qual metal economiza 95% de energia quando reciclado?",
    opts: ["Ferro", "Alumínio", "Cobre", "Zinco"],
    correct: 1,
    exp: "O alumínio reciclado economiza 95% de energia."
  },
  {
    q: "Para onde deve ir um celular antigo?",
    opts: ["Lixo comum", "Lixeira amarela", "Ponto de coleta de eletrônicos", "Aterro sanitário"],
    correct: 2,
    exp: "Eletrônicos devem ir a pontos de coleta de e-waste."
  }
]

const Quiz = () => {
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'wrong'
    text: string
  } | null>(null)

  const [finished, setFinished] = useState(false)

  const current = questions[idx]

  /* =========================
     INTERSECTION OBSERVER
  ========================= */

  useEffect(() => {
    const quizDiv = document.querySelector('.quiz-question')

    if (!quizDiv) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')

            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    observer.observe(quizDiv)

    return () => observer.disconnect()
  }, [])

  /* =========================
     ANSWER
  ========================= */

  const handleAnswer = (optIndex: number) => {
    if (answered) return

    const isCorrect = optIndex === current.correct

    if (isCorrect) {
      setScore((prev) => prev + 1)
    }

    setFeedback({
      type: isCorrect ? 'correct' : 'wrong',
      text: `${isCorrect ? '✓ Correto!' : '✗ Errado.'} ${current.exp}`
    })

    setAnswered(true)
  }

  /* =========================
     NEXT QUESTION
  ========================= */

  const nextQuestion = () => {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1)

      setAnswered(false)
      setFeedback(null)
    } else {
      setFinished(true)
    }
  }

  /* =========================
     RESTART
  ========================= */

  const restart = () => {
    setIdx(0)

    setScore(0)

    setAnswered(false)

    setFeedback(null)

    setFinished(false)
  }

  /* =========================
     FINISHED SCREEN
  ========================= */

  if (finished) {
    return (
      <section id="quiz" className={style.quiz}>
        <h2 className={style.sectionTitle}>
          Teste seu
          <br />
          <em>conhecimento</em>
        </h2>

        <div className={style.quizWrap}>
          <div
            className={`${style.quizQuestion} quiz-question`}
            style={{
              textAlign: 'center',
              padding: '2rem'
            }}
          >
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}
            >
              {score >= 4 ? '🌿' : '🌱'}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--green)',
                marginBottom: '.5rem'
              }}
            >
              {score}/{questions.length}
            </div>

            <div
              style={{
                color: 'var(--gray1)',
                marginBottom: '2rem'
              }}
            >
              {score >= 4
                ? 'Incrível! Você é um guardião do planeta!'
                : score >= 2
                  ? 'Bom começo! Continue aprendendo.'
                  : 'Que tal rever o conteúdo acima?'}
            </div>

            <button
              className="btn-primary"
              onClick={restart}
            >
              Recomeçar
            </button>
          </div>
        </div>
      </section>
    )
  }

  /* =========================
     QUIZ
  ========================= */

  return (
    <section id="quiz" className={style.quiz}>
      <h2 className={style.sectionTitle}>
        Teste seu
        <br />
        <em>conhecimento</em>
      </h2>

      <div className={style.quizWrap}>
        <div className={`${style.quizQuestion} quiz-question`}>
          <div className={style.quizQ}>
            {idx + 1}. {current.q}
          </div>

          <div className={style.quizOptions}>
            {current.opts.map((opt, i) => {
              const isCorrect = i === current.correct

              const isWrongSelected =
                answered &&
                feedback?.type === 'wrong' &&
                !isCorrect

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={answered}
                  className={`
                    ${style.quizOpt}
                    ${answered && isCorrect ? style.correct : ''}
                    ${isWrongSelected ? style.wrong : ''}
                  `}
                >
                  {opt}
                </button>
              )
            })}
          </div>

          {feedback && (
            <div
              className={`
                ${style.quizFeedback}
                ${style.show}
                ${
                  feedback.type === 'correct'
                    ? style.correct
                    : style.wrong
                }
              `}
            >
              {feedback.text}
            </div>
          )}

          <div className={style.quizNav}>
            <div className={style.quizScore}>
              Pontuação:
              {' '}
              <span>{score}</span>
              /{questions.length}
            </div>

            <button
              onClick={nextQuestion}
              disabled={!answered}
              className={`
                ${style.quizNext}
                ${answered ? style.show : ''}
              `}
            >
              Próxima →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quiz