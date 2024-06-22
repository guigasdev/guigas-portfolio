import styles from './HeroStyles.module.css';
import heroImg from '../../assets/guigas-icon.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/curriculo.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg}
                alt="Profile picture of Guilherme" 
            />
            <img
                src={themeIcon}
                alt="Color mode icon"
                className={styles.colorMode}
                onClick={toggleTheme} 
             />
        </div>
        <div className={styles.info}>
            <h1>
                Guilherme
                <br /> 
                Pereira
            </h1>
            <h2>Software Developer</h2>
            <span>
                <a href="https://twitter.com/guigasdev" target='_blank'><img src={twitterIcon} alt="Twitter Icon" /></a>
                <a href="https://github.com/guigasdev" target='_blank'><img src={githubIcon} alt="Github Icon" /></a>
                <a href="https://www.linkedin.com/in/guilherme-pereiradev/" target='_blank'><img src={linkedinIcon} alt="Linkedin Icon" /></a>
                
            </span>
            <p className={styles.description}>
                Tenho paixão por programação e tecnologia, sobretudo, desenvolvimento backend, espero que possa te ajudar, entre em contato comigo!
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Currículo
                </button>
            </a>
        </div>
    </section>
  ) 
}

export default Hero
