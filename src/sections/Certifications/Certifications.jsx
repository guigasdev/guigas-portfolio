import { useTranslation } from 'react-i18next';

function Certifications() {
  const { t } = useTranslation();
  const data = t('certifications', { returnObjects: true });
  const certs = data.items;

  return (
    <section id="certifications" className="mx-auto w-full max-w-6xl px-6">
      <h1 className="sectionTitle">{data.title}</h1>
      <p className="mb-4 text-slate-300">{data.blurb}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="block w-full max-w-md rounded-lg border border-white/10 bg-white/5 p-4 text-slate-200 shadow-sm transition hover:border-primary-500 hover:shadow-glow"
          >
            <h3 className="font-display text-lg font-bold text-slate-100 hover:text-primary-400">{c.name}</h3>
            <p className="text-sm text-slate-400">{c.org} • {c.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;


