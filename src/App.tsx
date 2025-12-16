import { useState, useEffect } from 'react'
import './App.css'

type Language = 'ar' | 'en'

const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      about: 'من نحن',
      team: 'فريقنا',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'مرحباً بكم في',
      brandName: 'طاقة أمل',
      subtitle: 'نحن هنا لمساعدتك في رحلة الشفاء والنمو الشخصي. فريقنا من المستشارين المتخصصين يقدم لك الدعم النفسي والإرشادي في بيئة آمنة ومريحة.',
      cta1: 'احجز جلستك الآن',
      cta2: 'تعرف علينا',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدم مجموعة متنوعة من الخدمات الإرشادية والنفسية لمساعدتك',
      items: [
        { icon: '💭', title: 'الاستشارات الفردية', desc: 'جلسات خاصة ومخصصة لمعالجة مشاكلك الشخصية في بيئة سرية وآمنة' },
        { icon: '👨‍👩‍👧‍👦', title: 'الإرشاد الأسري', desc: 'مساعدة العائلات على تحسين التواصل وحل النزاعات وتقوية الروابط' },
        { icon: '💑', title: 'استشارات الأزواج', desc: 'دعم الأزواج لبناء علاقات أقوى وأكثر صحة' },
        { icon: '🧠', title: 'العلاج النفسي', desc: 'علاج متخصص للقلق والاكتئاب والصدمات النفسية' },
        { icon: '🎓', title: 'الإرشاد المهني', desc: 'مساعدتك في اكتشاف مسارك المهني وتحقيق أهدافك' },
        { icon: '🌟', title: 'تطوير الذات', desc: 'برامج لتعزيز الثقة بالنفس والنمو الشخصي' },
      ],
    },
    about: {
      title: 'من نحن',
      p1: 'طاقة أمل هو مركز إرشاد نفسي متخصص يضم فريقاً من المستشارين والمعالجين النفسيين ذوي الخبرة والكفاءة العالية.',
      p2: 'نؤمن بأن كل شخص يستحق الحصول على الدعم النفسي المناسب، ونسعى جاهدين لتوفير بيئة علاجية دافئة ومرحبة.',
      stats: [
        { number: '+500', label: 'عميل سعيد' },
        { number: '+10', label: 'سنوات خبرة' },
        { number: '+15', label: 'مستشار متخصص' },
      ],
    },
    cta: {
      title: 'ابدأ رحلتك نحو حياة أفضل',
      subtitle: 'لا تتردد في التواصل معنا. نحن هنا لمساعدتك في كل خطوة من رحلتك نحو الشفاء والنمو.',
      button: 'تواصل معنا الآن',
    },
    footer: {
      brand: 'طاقة أمل',
      desc: 'مركز متخصص في الإرشاد النفسي والأسري. نساعدك على تحقيق التوازن النفسي والعاطفي.',
      quickLinks: 'روابط سريعة',
      ourServices: 'خدماتنا',
      contactUs: 'تواصل معنا',
      rights: '© 2024 طاقة أمل. جميع الحقوق محفوظة.',
    },
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      team: 'Our Team',
      contact: 'Contact',
    },
    hero: {
      title: 'Welcome to',
      brandName: "Ta2et Amal",
      subtitle: 'We are here to help you on your journey of healing and personal growth. Our team of specialized counselors provides psychological support and guidance in a safe and comfortable environment.',
      cta1: 'Book Your Session',
      cta2: 'Learn About Us',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a variety of counseling and psychological services to help you',
      items: [
        { icon: '💭', title: 'Individual Counseling', desc: 'Private and personalized sessions to address your personal issues in a confidential and safe environment' },
        { icon: '👨‍👩‍👧‍👦', title: 'Family Counseling', desc: 'Helping families improve communication, resolve conflicts and strengthen bonds' },
        { icon: '💑', title: 'Couples Therapy', desc: 'Supporting couples to build stronger and healthier relationships' },
        { icon: '🧠', title: 'Psychotherapy', desc: 'Specialized treatment for anxiety, depression and psychological trauma' },
        { icon: '🎓', title: 'Career Counseling', desc: 'Helping you discover your career path and achieve your goals' },
        { icon: '🌟', title: 'Self Development', desc: 'Programs to enhance self-confidence and personal growth' },
      ],
    },
    about: {
      title: 'About Us',
      p1: "Ta2et Amal is a specialized psychological counseling center with a team of experienced and highly qualified counselors and therapists.",
      p2: 'We believe that everyone deserves appropriate psychological support, and we strive to provide a warm and welcoming therapeutic environment.',
      stats: [
        { number: '+500', label: 'Happy Clients' },
        { number: '+10', label: 'Years Experience' },
        { number: '+15', label: 'Expert Counselors' },
      ],
    },
    cta: {
      title: 'Start Your Journey to a Better Life',
      subtitle: "Don't hesitate to contact us. We are here to help you every step of the way on your journey to healing and growth.",
      button: 'Contact Us Now',
    },
    footer: {
      brand: "Ta2et Amal",
      desc: 'A center specialized in psychological and family counseling. We help you achieve psychological and emotional balance.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contactUs: 'Contact Us',
      rights: "© 2024 Ta2et Amal. All rights reserved.",
    },
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
  },
}

function App() {
  const [isDark, setIsDark] = useState(false)
  const [lang, setLang] = useState<Language>('ar')

  const t = translations[lang]

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    if (lang === 'ar') {
      document.documentElement.classList.add('rtl')
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    } else {
      document.documentElement.classList.remove('rtl')
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }, [lang])

  const toggleTheme = () => setIsDark(!isDark)
  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar')

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo">
            <div className="logo-icon">🌟</div>
            <div className="logo-text">
              {lang === 'ar' ? 'طاقة' : "Ta2et"} <span>{lang === 'ar' ? 'أمل' : 'Amal'}</span>
            </div>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home">{t.nav.home}</a></li>
            <li><a href="#services">{t.nav.services}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#team">{t.nav.team}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>

          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDark ? '☀️' : '🌙'} {isDark ? t.lightMode : t.darkMode}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                {t.hero.title} <span>{t.hero.brandName}</span>
              </h1>
              <p>{t.hero.subtitle}</p>
              <div className="hero-buttons">
                <button className="btn-primary">{t.hero.cta1}</button>
                <button className="btn-outline">{t.hero.cta2}</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-visual">💚</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>{t.services.title}</h2>
            <p>{t.services.subtitle}</p>
          </div>
          <div className="services-grid">
            {t.services.items.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">🏥</div>
            <div className="about-text">
              <h2>{t.about.title}</h2>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <div className="about-stats">
                {t.about.stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <button className="btn-secondary">{t.cta.button}</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>🌟 {t.footer.brand}</h3>
              <p>{t.footer.desc}</p>
            </div>
            <div className="footer-links">
              <h4>{t.footer.quickLinks}</h4>
              <ul>
                <li><a href="#home">{t.nav.home}</a></li>
                <li><a href="#about">{t.nav.about}</a></li>
                <li><a href="#team">{t.nav.team}</a></li>
                <li><a href="#contact">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>{t.footer.ourServices}</h4>
              <ul>
                {t.services.items.slice(0, 4).map((service, index) => (
                  <li key={index}><a href="#services">{service.title}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-links">
              <h4>{t.footer.contactUs}</h4>
              <ul>
                <li><a href="mailto:info@ta2etamal.com">info@ta2etamal.com</a></li>
                <li><a href="tel:+123456789">+123 456 789</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
