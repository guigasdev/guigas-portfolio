import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Modal from '../../common/Modal';
import { Maximize2, X, ChevronRight, ZoomIn } from 'lucide-react';

function ArchitectureCard({ item }) {
  const [open, setOpen] = React.useState(false);
  const [fullImage, setFullImage] = React.useState(false);
  const { t } = useTranslation();

  // Dynamically import image from assets
  const imageUrl = new URL(`../../assets/${item.image}`, import.meta.url).href;

  return (
    <>
      <motion.div
        className="group relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-primary-500/50 hover:bg-white/[0.08]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setOpen(true)}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-white flex items-center justify-center cursor-pointer">
          <img
            src={imageUrl}
            alt={item.title}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <Maximize2 size={16} />
              {t('buttons.viewDetails')}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 text-center items-center">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {item.tech.map((tag) => (
              <span key={tag} className="rounded-md bg-primary-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-400">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400 line-clamp-2 max-w-lg">
            {item.summary}
          </p>
        </div>
      </motion.div>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy={`arch-title-${item.id}`}>
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[85vh] p-2 custom-scrollbar">
          <div className="relative group">
            <div 
              className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white flex items-center justify-center cursor-zoom-in"
              onClick={() => setFullImage(true)}
            >
              <img src={imageUrl} alt={item.title} className="h-full w-full object-contain" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                  <ZoomIn size={16} />
                  Clique para expandir
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 id={`arch-title-${item.id}`} className="font-display text-2xl font-bold text-slate-100">
                {item.title}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tech.map((tag) => (
                  <span key={tag} className="rounded-md border border-primary-500/20 bg-primary-500/5 px-2 py-1 text-xs font-mono text-primary-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="text-base leading-relaxed">
                {item.description}
              </p>
              
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <h4 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-slate-100">
                  <ChevronRight size={20} className="text-primary-500" />
                  Detalhamento Técnico
                </h4>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => {
                    const [title, desc] = detail.split(': ');
                    return (detail.includes(': ') ? (
                      <li key={idx} className="flex flex-col gap-1 text-sm">
                        <span className="font-bold text-slate-200">{title}:</span>
                        <span className="text-slate-400">{desc}</span>
                      </li>
                    ) : (
                      <li key={idx} className="text-sm text-slate-400">
                        {detail}
                      </li>
                    ));
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Full Screen Image Lightbox using Portal to ensure it stays on top of everything */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {fullImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
              onClick={() => setFullImage(false)}
            >
              <motion.button
                className="absolute top-6 right-6 z-[10000] rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setFullImage(false);
                }}
              >
                <X size={28} />
              </motion.button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-bold text-white">{item.title}</p>
                  <p className="text-sm text-slate-400">Pressione ESC ou clique fora para fechar</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

function Architectures() {
  const { t } = useTranslation();
  const data = t('architectures', { returnObjects: true });

  if (!data || !data.items) return null;

  return (
    <section id="architectures" className="w-full py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="sectionTitle">{data.title}</h2>
          <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-primary-600 shadow-glow" />
        </motion.div>

        <div className="flex w-full flex-col items-center gap-10">
          {data.items.map((item) => (
            <ArchitectureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Architectures;
