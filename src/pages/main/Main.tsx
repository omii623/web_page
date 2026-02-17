import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

function Main() {
  const [count, setCount] = useState(0)
  const { t } = useLanguage()

  return (
    <div className="page-container main-page">
      <section className="hero-section">
        <h1>{t('main.hero.title')}</h1>
        <p className="hero-subtitle">
          {t('main.hero.subtitle')}
        </p>
        <div className="hero-buttons">
          <button onClick={() => setCount(count + 1)}>
            {t('main.hero.clicks')}: {count}
          </button>
          <button className="secondary-button">{t('main.hero.learnMore')}</button>
        </div>
      </section>

      <section className="features-section">
        <h2>{t('main.features.title')}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>{t('main.feature.fast.title')}</h3>
            <p>{t('main.feature.fast.desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>{t('main.feature.elegant.title')}</h3>
            <p>{t('main.feature.elegant.desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>{t('main.feature.secure.title')}</h3>
            <p>{t('main.feature.secure.desc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>{t('main.feature.efficient.title')}</h3>
            <p>{t('main.feature.efficient.desc')}</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <h3>1000+</h3>
          <p>{t('main.stats.users')}</p>
        </div>
        <div className="stat-item">
          <h3>99.9%</h3>
          <p>{t('main.stats.uptime')}</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>{t('main.stats.support')}</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>{t('main.stats.features')}</p>
        </div>
      </section>
    </div>
  )
}

export default Main
