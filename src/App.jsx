import './App.css';
import Hero from './sections/Hero/Hero';
import { useTranslation } from 'react-i18next';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Experience from './sections/Experience/Experience';
import Certifications from './sections/Certifications/Certifications';
import Architectures from './sections/Architectures/Architectures';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from './common/ThemeContext';
import { Sun, Moon } from 'lucide-react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col bg-ink text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="font-display text-lg font-bold text-primary-400">GP</Link>
          <div className="flex items-center gap-4 text-sm font-mono text-slate-300">
            <NavLink 
              to="/experience" 
              className={({ isActive }) => `transition-colors hover:text-primary-400 ${isActive ? 'text-primary-400 underline decoration-2 underline-offset-4' : ''}`}
            >
              {t('nav.experience')}
            </NavLink>
            <NavLink 
              to="/certifications" 
              className={({ isActive }) => `transition-colors hover:text-primary-400 ${isActive ? 'text-primary-400 underline decoration-2 underline-offset-4' : ''}`}
            >
              {t('nav.certifications')}
            </NavLink>
            <NavLink 
              to="/architectures" 
              className={({ isActive }) => `transition-colors hover:text-primary-400 ${isActive ? 'text-primary-400 underline decoration-2 underline-offset-4' : ''}`}
            >
              {t('nav.architectures')}
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `transition-colors hover:text-primary-400 ${isActive ? 'text-primary-400 underline decoration-2 underline-offset-4' : ''}`}
            >
              {t('nav.projects')}
            </NavLink>
            <NavLink 
              to="/skills" 
              className={({ isActive }) => `transition-colors hover:text-primary-400 ${isActive ? 'text-primary-400 underline decoration-2 underline-offset-4' : ''}`}
            >
              {t('nav.skills')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `transition-colors hover:text-primary-400 ${isActive ? 'text-primary-400 underline decoration-2 underline-offset-4' : ''}`}
            >
              {t('nav.contact')}
            </NavLink>
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
              <button
                aria-label="Alternar tema"
                onClick={toggleTheme}
                className="rounded-full p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-primary-400"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300 hover:border-primary-500 hover:text-primary-400"
                onClick={() => i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')}
              >
                {i18n.language === 'pt' ? 'PT' : 'EN'}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow py-12 md:py-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/architectures" element={<Architectures />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;