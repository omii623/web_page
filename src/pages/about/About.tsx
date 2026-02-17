import { useLanguage } from '../../contexts/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <div className="page-container about-page">
      <section className="about-header">
        <h1>{t('about.header.title')}</h1>
        <p className="about-subtitle">
          {t('about.header.subtitle')}
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>{t('about.mission.title')}</h2>
          <p>{t('about.mission.p1')}</p>
          <p>{t('about.mission.p2')}</p>
        </div>
      </section>

      <section className="values-section">
        <h2>{t('about.values.title')}</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-number">01</div>
            <h3>{t('about.value.innovation.title')}</h3>
            <p>{t('about.value.innovation.desc')}</p>
          </div>
          <div className="value-card">
            <div className="value-number">02</div>
            <h3>{t('about.value.quality.title')}</h3>
            <p>{t('about.value.quality.desc')}</p>
          </div>
          <div className="value-card">
            <div className="value-number">03</div>
            <h3>{t('about.value.transparency.title')}</h3>
            <p>{t('about.value.transparency.desc')}</p>
          </div>
          <div className="value-card">
            <div className="value-number">04</div>
            <h3>{t('about.value.teamwork.title')}</h3>
            <p>{t('about.value.teamwork.desc')}</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>{t('about.team.title')}</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">JD</div>
            <h3>John Doe</h3>
            <p className="member-role">{t('about.team.ceo')}</p>
            <p className="member-bio">
              {t('about.team.ceo.bio')}
            </p>
          </div>
          <div className="team-member">
            <div className="member-avatar">JS</div>
            <h3>Jane Smith</h3>
            <p className="member-role">{t('about.team.cto')}</p>
            <p className="member-bio">
              {t('about.team.cto.bio')}
            </p>
          </div>
          <div className="team-member">
            <div className="member-avatar">MJ</div>
            <h3>Mike Johnson</h3>
            <p className="member-role">{t('about.team.designer')}</p>
            <p className="member-bio">
              {t('about.team.designer.bio')}
            </p>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <h2>{t('about.contact.title')}</h2>
        <p>{t('about.contact.text')}</p>
        <button>{t('about.contact.button')}</button>
      </section>
    </div>
  )
}

export default About
