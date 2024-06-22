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
        <SkillList src={checkMarkIcon} skill='C++' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Django' />
        <SkillList src={checkMarkIcon} skill='Discord.py' />
        <SkillList src={checkMarkIcon} skill='Flask' />

    </div>
    <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='MongoDB' />
      <SkillList src={checkMarkIcon} skill='Git' />
      <SkillList src={checkMarkIcon} skill='Postman' />

    </div>
    </section>
  )
}

export default Skills
