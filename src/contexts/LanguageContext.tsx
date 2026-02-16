import { createContext, useContext, useState } from 'react'

type Language = 'hu' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  hu: {
    // Header
    'nav.home': 'Főoldal',
    'nav.about': 'Rólunk',
    'nav.game': 'Játék',
    'site.title': 'MyWebsite',

    // Main Page
    'main.hero.title': 'Üdvözlünk a MyWebsite oldalon!',
    'main.hero.subtitle': 'Az innováció és kreativitás találkozási pontja',
    'main.hero.clicks': 'Kattintások',
    'main.hero.learnMore': 'Tudj meg többet',
    'main.features.title': 'Funkcióink',
    'main.feature.fast.title': 'Gyors',
    'main.feature.fast.desc': 'Villámgyors teljesítmény modern technológiákkal',
    'main.feature.elegant.title': 'Elegáns',
    'main.feature.elegant.desc': 'Lenyűgöző piros-fekete design',
    'main.feature.secure.title': 'Biztonságos',
    'main.feature.secure.desc': 'Adataid védelme a legfontosabb',
    'main.feature.efficient.title': 'Hatékony',
    'main.feature.efficient.desc': 'Optimalizált felhasználói élmény',
    'main.stats.users': 'Elégedett felhasználó',
    'main.stats.uptime': 'Uptime garancia',
    'main.stats.support': 'Támogatás',
    'main.stats.features': 'Funkció',

    // About Page
    'about.header.title': 'Rólunk',
    'about.header.subtitle': 'Ismerd meg történetünket és küldetésünket',
    'about.mission.title': 'Küldetésünk',
    'about.mission.p1': 'A MyWebsite csapata elkötelezett amellett, hogy a legjobb digitális élményt nyújtsa felhasználóinak. Célunk, hogy innovatív megoldásokkal segítsük ügyfeleinket céljuk elérésében.',
    'about.mission.p2': 'Hiszünk abban, hogy a technológia és a kreativitás együttes ereje képes megváltoztatni a világot. Minden projektünket szenvedéllyel és precizitással valósítjuk meg.',
    'about.values.title': 'Értékeink',
    'about.value.innovation.title': 'Innováció',
    'about.value.innovation.desc': 'Folyamatosan keressük az új és jobb megoldásokat',
    'about.value.quality.title': 'Minőség',
    'about.value.quality.desc': 'Nem alkuszunk meg a kiválóságnál',
    'about.value.transparency.title': 'Átláthatóság',
    'about.value.transparency.desc': 'Nyílt és őszinte kommunikáció ügyfeleinkkel',
    'about.value.teamwork.title': 'Csapatmunka',
    'about.value.teamwork.desc': 'Együtt érünk el nagyszerű eredményeket',
    'about.team.title': 'Csapatunk',
    'about.team.ceo': 'CEO & Founder',
    'about.team.cto': 'CTO',
    'about.team.designer': 'Lead Designer',
    'about.team.ceo.bio': '15+ év tapasztalat a tech iparban',
    'about.team.cto.bio': 'Vezető fejlesztő és tech vízionárius',
    'about.team.designer.bio': 'Kreatív vezető és UX/UI specialista',
    'about.contact.title': 'Kapcsolatba lépés',
    'about.contact.text': 'Van kérdésed vagy projektötleted? Keress minket bizalommal!',
    'about.contact.button': 'Írj nekünk',

    // Game Page
    'game.title': 'Reflex Game',
    'game.subtitle': 'Kattints a célpontra, ahányszor csak tudsz az idő lejárta előtt!',
    'game.difficulty': 'Nehézség',
    'game.difficulty.easy': 'Könnyű',
    'game.difficulty.medium': 'Közepes',
    'game.difficulty.hard': 'Nehéz',
    'game.score': 'Pontszám',
    'game.time': 'Idő',
    'game.start': 'Játék indítása',
    'game.playing': 'Játék folyamatban...',
    'game.start.title': 'Kattints a "Játék indítása" gombra!',
    'game.start.desc': 'Kattints a megjelenő célpontra, ahányszor csak tudsz {time} másodperc alatt',
    'game.over.title': 'Játék vége!',
    'game.over.score': 'Végső pontszám',
    'game.retry': 'Újra',
    'game.highscores': 'Top 5 Eredmény',
    'game.points': 'pont',
    'game.howto.title': 'Hogyan játszd?',
    'game.howto.step1': 'Válaszd ki a nehezsági szintet',
    'game.howto.step2': 'Kattints a "Játék indítása" gombra',
    'game.howto.step3': 'Kattints a megjelenő célpontra, ahányszor csak tudsz',
    'game.howto.step4': 'Minél több kattintás, annál jobb a pontszámod!',
    'game.howto.step5': 'Nehezebb szint = kisebb célpont és kevesebb idő',

    // Footer
    'footer.tagline': 'Az innovatív web megoldásod',
    'footer.quicklinks': 'Gyors linkek',
    'footer.contact': 'Kapcsolat',
    'footer.email': 'Email',
    'footer.phone': 'Tel',
    'footer.address': 'Cím',
    'footer.address.value': 'Budapest, Magyarország',
    'footer.social': 'Közösségi média',
    'footer.copyright': 'MyWebsite. Minden jog fenntartva.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.game': 'Game',
    'site.title': 'MyWebsite',

    // Main Page
    'main.hero.title': 'Welcome to MyWebsite!',
    'main.hero.subtitle': 'Where innovation meets creativity',
    'main.hero.clicks': 'Clicks',
    'main.hero.learnMore': 'Learn More',
    'main.features.title': 'Our Features',
    'main.feature.fast.title': 'Fast',
    'main.feature.fast.desc': 'Lightning-fast performance with modern technologies',
    'main.feature.elegant.title': 'Elegant',
    'main.feature.elegant.desc': 'Stunning red-black design',
    'main.feature.secure.title': 'Secure',
    'main.feature.secure.desc': 'Your data protection is our priority',
    'main.feature.efficient.title': 'Efficient',
    'main.feature.efficient.desc': 'Optimized user experience',
    'main.stats.users': 'Happy Users',
    'main.stats.uptime': 'Uptime Guarantee',
    'main.stats.support': 'Support',
    'main.stats.features': 'Features',

    // About Page
    'about.header.title': 'About Us',
    'about.header.subtitle': 'Discover our story and mission',
    'about.mission.title': 'Our Mission',
    'about.mission.p1': 'The MyWebsite team is committed to providing the best digital experience to our users. Our goal is to help our clients achieve their objectives with innovative solutions.',
    'about.mission.p2': 'We believe that the combined power of technology and creativity can change the world. We execute every project with passion and precision.',
    'about.values.title': 'Our Values',
    'about.value.innovation.title': 'Innovation',
    'about.value.innovation.desc': 'We constantly seek new and better solutions',
    'about.value.quality.title': 'Quality',
    'about.value.quality.desc': 'We never compromise on excellence',
    'about.value.transparency.title': 'Transparency',
    'about.value.transparency.desc': 'Open and honest communication with our clients',
    'about.value.teamwork.title': 'Teamwork',
    'about.value.teamwork.desc': 'Together we achieve great results',
    'about.team.title': 'Our Team',
    'about.team.ceo': 'CEO & Founder',
    'about.team.cto': 'CTO',
    'about.team.designer': 'Lead Designer',
    'about.team.ceo.bio': '15+ years of experience in the tech industry',
    'about.team.cto.bio': 'Lead developer and tech visionary',
    'about.team.designer.bio': 'Creative lead and UX/UI specialist',
    'about.contact.title': 'Get in Touch',
    'about.contact.text': 'Have a question or project idea? Feel free to reach out!',
    'about.contact.button': 'Contact Us',

    // Game Page
    'game.title': 'Reflex Game',
    'game.subtitle': 'Click the target as many times as you can before time runs out!',
    'game.difficulty': 'Difficulty',
    'game.difficulty.easy': 'Easy',
    'game.difficulty.medium': 'Medium',
    'game.difficulty.hard': 'Hard',
    'game.score': 'Score',
    'game.time': 'Time',
    'game.start': 'Start Game',
    'game.playing': 'Game in progress...',
    'game.start.title': 'Click "Start Game" button!',
    'game.start.desc': 'Click the appearing target as many times as you can in {time} seconds',
    'game.over.title': 'Game Over!',
    'game.over.score': 'Final Score',
    'game.retry': 'Retry',
    'game.highscores': 'Top 5 Scores',
    'game.points': 'points',
    'game.howto.title': 'How to Play?',
    'game.howto.step1': 'Select the difficulty level',
    'game.howto.step2': 'Click the "Start Game" button',
    'game.howto.step3': 'Click the appearing target as many times as you can',
    'game.howto.step4': 'The more clicks, the better your score!',
    'game.howto.step5': 'Harder level = smaller target and less time',

    // Footer
    'footer.tagline': 'Your innovative web solution',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.address': 'Address',
    'footer.address.value': 'Budapest, Hungary',
    'footer.social': 'Social Media',
    'footer.copyright': 'MyWebsite. All rights reserved.',
  }
}

export function LanguageProvider({ children }: { children: any }) {
  const [language, setLanguage] = useState<Language>('hu')

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.hu]
    return translation || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
