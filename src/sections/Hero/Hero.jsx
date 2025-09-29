import heroImg from '../../assets/guigas-icon.jpg';
import CV from '../../assets/curriculo.pdf';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sun, Moon, FileDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative mx-auto flex min-h-[80dvh] w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 pt-16 md:min-h-[90dvh] md:flex-row-reverse">
      <div className="absolute right-6 top-6 md:right-10 md:top-10">
        <button
          aria-label="Alternar tema"
          onClick={toggleTheme}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 shadow-glow backdrop-blur transition hover:bg-white/10"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <motion.img
        src={heroImg}
        alt="Foto de perfil"
        className="mx-auto h-40 w-40 rounded-2xl object-cover ring-2 ring-primary-600 md:h-72 md:w-72"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="flex max-w-2xl flex-col items-center gap-6 text-center md:items-start md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-100 md:text-6xl">
          Guilherme
          <br />
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">Pereira</span>
        </h1>
        <h2 className="text-lg font-mono text-slate-300 md:text-xl">
          {t('hero.tagline')}
        </h2>

        <div className="flex items-center gap-5 text-slate-300">
          <a className="transition hover:text-primary-400" href="mailto:guigas.dev@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
            <Mail />
          </a>
          <a className="transition hover:text-primary-400" href="https://github.com/guigasdev" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a className="transition hover:text-primary-400" href="https://www.linkedin.com/in/guilherme-pereiradev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>

        <p className="max-w-xl text-slate-300">{t('hero.blurb')}</p>

        <div className="flex items-center gap-3">
          <a href={CV} download className="btn">
            <FileDown className="mr-2" size={18} /> {t('buttons.downloadCV')}
          </a>
          <a href="#contact" className="rounded-md border border-white/10 px-4 py-2 text-slate-200 transition hover:border-primary-500 hover:text-primary-400">{t('buttons.contactMe')}</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;