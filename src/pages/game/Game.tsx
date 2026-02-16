import { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './Game.css'

interface Score {
  score: number
  time: number
}

function Game() {
  const { t } = useLanguage()
  const [score, setScore] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 })
  const [highScores, setHighScores] = useState<Score[]>([])
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium')

  const difficultySettings = {
    easy: { time: 45, targetSize: 80 },
    medium: { time: 30, targetSize: 60 },
    hard: { time: 20, targetSize: 40 }
  }

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && gameActive) {
      endGame()
    }
  }, [timeLeft, gameActive])

  const startGame = () => {
    setScore(0)
    setTimeLeft(difficultySettings[difficulty].time)
    setGameActive(true)
    moveTarget()
  }

  const endGame = () => {
    setGameActive(false)
    const newScore: Score = { score, time: difficultySettings[difficulty].time - timeLeft }
    const updatedScores = [...highScores, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
    setHighScores(updatedScores)
  }

  const moveTarget = () => {
    const maxX = 90
    const maxY = 85
    const newX = Math.random() * maxX
    const newY = Math.random() * maxY
    setTargetPosition({ x: newX, y: newY })
  }

  const handleTargetClick = () => {
    if (gameActive) {
      setScore(score + 1)
      moveTarget()
    }
  }

  return (
    <div className="page-container game-page">
      <section className="game-header">
        <h1>🎯 {t('game.title')}</h1>
        <p className="game-subtitle">
          {t('game.subtitle')}
        </p>
      </section>

      <div className="game-controls">
        <div className="difficulty-selector">
          <label>{t('game.difficulty')}:</label>
          <div className="difficulty-buttons">
            <button
              className={`difficulty-btn ${difficulty === 'easy' ? 'active' : ''}`}
              onClick={() => setDifficulty('easy')}
              disabled={gameActive}
            >
              {t('game.difficulty.easy')}
            </button>
            <button
              className={`difficulty-btn ${difficulty === 'medium' ? 'active' : ''}`}
              onClick={() => setDifficulty('medium')}
              disabled={gameActive}
            >
              {t('game.difficulty.medium')}
            </button>
            <button
              className={`difficulty-btn ${difficulty === 'hard' ? 'active' : ''}`}
              onClick={() => setDifficulty('hard')}
              disabled={gameActive}
            >
              {t('game.difficulty.hard')}
            </button>
          </div>
        </div>

        <div className="game-stats">
          <div className="stat-box">
            <span className="stat-label">{t('game.score')}</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">{t('game.time')}</span>
            <span className="stat-value time">{timeLeft}s</span>
          </div>
        </div>

        <button
          className="start-button"
          onClick={startGame}
          disabled={gameActive}
        >
          {gameActive ? t('game.playing') : t('game.start')}
        </button>
      </div>

      <div className="game-area">
        {!gameActive && timeLeft === difficultySettings[difficulty].time && (
          <div className="game-message">
            <h2>{t('game.start.title')}</h2>
            <p>{t('game.start.desc').replace('{time}', String(difficultySettings[difficulty].time))}</p>
          </div>
        )}
        {!gameActive && timeLeft !== difficultySettings[difficulty].time && (
          <div className="game-message game-over">
            <h2>{t('game.over.title')}</h2>
            <p className="final-score">{t('game.over.score')}: <strong>{score}</strong></p>
            <button onClick={startGame}>{t('game.retry')}</button>
          </div>
        )}
        {gameActive && (
          <div
            className="target"
            style={{
              left: `${targetPosition.x}%`,
              top: `${targetPosition.y}%`,
              width: `${difficultySettings[difficulty].targetSize}px`,
              height: `${difficultySettings[difficulty].targetSize}px`
            }}
            onClick={handleTargetClick}
          >
            🎯
          </div>
        )}
      </div>

      {highScores.length > 0 && (
        <section className="highscores-section">
          <h2>🏆 {t('game.highscores')}</h2>
          <div className="highscores-list">
            {highScores.map((s, index) => (
              <div key={index} className="highscore-item">
                <span className="rank">#{index + 1}</span>
                <span className="highscore-score">{s.score} {t('game.points')}</span>
                <span className="highscore-time">{s.time}s</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="game-info">
        <h3>{t('game.howto.title')}</h3>
        <ul>
          <li>{t('game.howto.step1')}</li>
          <li>{t('game.howto.step2')}</li>
          <li>{t('game.howto.step3')}</li>
          <li>{t('game.howto.step4')}</li>
          <li>{t('game.howto.step5')}</li>
        </ul>
      </section>
    </div>
  )
}

export default Game
