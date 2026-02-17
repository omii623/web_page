import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

function NotFound() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <div className="page-container not-found-page">
      <div className="not-found-container">
        <div className="error-code">404</div>
        <h1 className="error-title">{t('notfound.title')}</h1>
        <p className="error-message">{t('notfound.message')}</p>
        <div className="error-actions">
          <button onClick={() => navigate('/index')}>
            {t('notfound.goHome')}
          </button>
          <button className="secondary-button" onClick={() => navigate(-1)}>
            {t('notfound.goBack')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
