import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('site.title')}</h3>
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.quicklinks')}</h4>
          <ul>
            <li><a href="/index">{t('nav.home')}</a></li>
            <li><a href="/about">{t('nav.about')}</a></li>
            <li><a href="/game">{t('nav.game')}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <ul>
            <li>{t('footer.email')}: info@mywebsite.com</li>
            <li>{t('footer.phone')}: +36 1 234 5678</li>
            <li>{t('footer.address')}: {t('footer.address.value')}</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.social')}</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {t('footer.copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
