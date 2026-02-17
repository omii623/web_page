import { useLanguage } from '../../contexts/LanguageContext'

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${language === 'hu' ? 'active' : ''}`}
        onClick={() => setLanguage('hu')}
        aria-label="Magyar nyelv"
      >
        HU
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="English language"
      >
        EN
      </button>
    </div>
  )
}

export default LanguageToggle
