import './App.css';
import Hero from './sections/Hero/Hero';
import { useTranslation } from 'react-i18next';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Experience from './sections/Experience/Experience';
import Certifications from './sections/Certifications/Certifications';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const handleSmooth = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const target = document.querySelector(href);
    if (!target) return;
    const headerOffset = 72;
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = rect.top + scrollTop - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="bg-ink text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#hero" onClick={handleSmooth} className="font-display text-lg font-bold text-primary-400">GP</a>
          <div className="flex items-center gap-4 text-sm font-mono text-slate-300">
            <a href="#experience" onClick={handleSmooth} className="hover:text-primary-400">{t('nav.experience')}</a>
            <a href="#certifications" onClick={handleSmooth} className="hover:text-primary-400">{t('nav.certifications')}</a>
            <a href="#projects" onClick={handleSmooth} className="hover:text-primary-400">{t('nav.projects')}</a>
            <a href="#skills" onClick={handleSmooth} className="hover:text-primary-400">{t('nav.skills')}</a>
            <a href="#contact" onClick={handleSmooth} className="hover:text-primary-400">{t('nav.contact')}</a>
            <button
              className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-primary-500 hover:text-primary-400"
              onClick={() => i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')}
            >
              {i18n.language === 'pt' ? 'PT' : 'EN'}
            </button>
          </div>
        </nav>
      </header>

      <div className="space-y-24 md:space-y-36">
        <div id="hero" className="scroll-mt-24">
          <Hero />
        </div>
        <div id="experience" className="scroll-mt-24">
          <Experience />
        </div>
        <div id="certifications" className="scroll-mt-24">
          <Certifications />
        </div>
        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>
        <div id="skills" className="scroll-mt-24">
          <Skills />
        </div>
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App
