import styles from './SkillsStyle.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillsList'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Habilidades</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='Python' />
        <SkillList src={checkMarkIcon} skill='Java' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Django' />
        <SkillList src={checkMarkIcon} skill='Discord.py' />
        <SkillList src={checkMarkIcon} skill='Flask' />
        <SkillList src={checkMarkIcon} skill='Spring Framework' />
        <SkillList src={checkMarkIcon} skill='NextJS' />

    </div>
    <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='MongoDB' />
      <SkillList src={checkMarkIcon} skill='Git' />
      <SkillList src={checkMarkIcon} skill='Postman' />
      <SkillList src={checkMarkIcon} skill='AWS' />
      <SkillList src={checkMarkIcon} skill='CI/CD' />
      <SkillList src={checkMarkIcon} skill='Testes' />

    </div>
    </section>
  )
}

export default Skills
