import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();
  const data = t('experience', { returnObjects: true });
  const experiences = data.items;

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6">
      <h1 className="sectionTitle">{data.title}</h1>
      <div className="relative mx-auto max-w-3xl border-l border-white/10 pl-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company + idx}
            className="relative mb-8"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <span className="absolute -left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-primary-500 ring-4 ring-primary-500/20" />
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-bold text-slate-100">{exp.role}</h3>
                <span className="text-xs font-mono text-slate-400">@ {exp.company}</span>
                <span className="ml-auto text-xs font-mono text-slate-400">{exp.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;


