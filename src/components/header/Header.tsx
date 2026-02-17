import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import LanguageToggle from '../lang/LanguageToggle'

function Header() {
  const location = useLocation()
  const { t } = useLanguage()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">{t('site.title')}</Link>
        </div>
        <div className="header-right">
          <nav className="nav-menu">
            <Link
              to="/index"
              className={`nav-link ${isActive('/index') || isActive('/') ? 'active' : ''}`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/game"
              className={`nav-link ${isActive('/game') ? 'active' : ''}`}
            >
              {t('nav.game')}
            </Link>
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
