import styles from './ContactStyles.module.css';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">{t('contact.title')}</h1>
      <p className="mx-auto mb-4 max-w-2xl px-6 text-slate-700 dark:text-slate-300">{t('contact.blurb')}</p>
      <div className="mb-6 flex justify-center">
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-500/20 dark:border-emerald-400/30 dark:text-emerald-300"
        >
          <MessageCircle size={18} /> {t('contact.cta')}
        </a>
      </div>
      <form action="https://formspree.io/f/xnnaadqr" method='post' className="mx-auto w-full max-w-2xl px-6">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            {i18n?.language === 'pt' ? 'Nome' : 'Name'}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={i18n?.language === 'pt' ? 'Nome' : 'Name'}
            required
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            {i18n?.language === 'pt' ? 'Email' : 'Email'}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={i18n?.language === 'pt' ? 'Email' : 'Email'}
            required
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            {i18n?.language === 'pt' ? 'Mensagem' : 'Message'}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={i18n?.language === 'pt' ? 'Mensagem' : 'Message'}
            required
            className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 h-40"
          ></textarea>
        </div>
        <div className="mt-2">
          <input className="hover btn" type="submit" value={i18n?.language === 'pt' ? 'Enviar' : 'Send'} />
        </div>
      </form>
    </section>
  );
}

export default Contact;