import styles from './FooterStyles.module.css'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <section id='footer' className={styles.container}>
      <p>&copy; 2024 Guilherme Pereira. <br />
        {t('footer.copyright')}
      </p>

    </section>
  )
}

export default Footer
