import styles from './SkillsStyle.module.css'
import { useTranslation } from 'react-i18next'

function Skills() {
  const { t } = useTranslation();
  const data = t('skills', { returnObjects: true });
  const categories = data.categories;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>{data.title}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h3 className="font-display text-lg font-bold text-slate-100">{cat.title}</h3>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {cat.items.map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
