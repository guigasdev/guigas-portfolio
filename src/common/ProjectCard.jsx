import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Modal from './Modal'

function TechTag({ name }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">{name}</span>
  )
}

function ProjectCard({ src, link, h3, p, tech = [], site }) {
  const [hover, setHover] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  return (
    <>
    <motion.div
      className='group relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-primary-500'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setOpen(true)}
      initial={false}
      animate={{ scale: hover ? 1.02 : 1, zIndex: hover ? 20 : 1 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    >
      <div className="mb-3 flex h-48 w-full items-center justify-center overflow-hidden rounded-lg md:h-56 bg-transparent">
        <motion.img
          src={src}
          alt={`${h3} logo`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
          initial={false}
          animate={{ scale: hover ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        />
      </div>
      <h3 className='font-display text-lg font-bold text-slate-800 dark:text-slate-100'>{h3}</h3>
      <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>{p}</p>
      {tech.length > 0 && (
        <div className='mt-3 flex flex-wrap items-center justify-center gap-2'>
          {tech.map((t) => (
            <TechTag key={t} name={t} />
          ))}
        </div>
      )}

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute inset-0 z-10 flex items-end justify-center bg-ink/80 p-4 backdrop-blur'
          >
            <div className='w-full max-w-md rounded-lg border border-white/10 bg-white/5 p-4 text-slate-200 shadow-glow'>
              <div className='mb-2 flex items-center justify-between'>
                <h4 className='font-display text-base font-bold'>{h3}</h4>
                <div className='flex items-center gap-2'>
                  {link && (
                    <a href={link} target='_blank' rel='noreferrer' className='text-slate-300 hover:text-primary-400'>
                      <Github size={18} />
                    </a>
                  )}
                  {site && (
                    <a href={site} target='_blank' rel='noreferrer' className='text-slate-300 hover:text-primary-400'>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className='text-sm text-slate-300'>{p}</p>
              {tech.length > 0 && (
                <div className='mt-3 flex flex-wrap items-center justify-start gap-2'>
                  {tech.map((t) => (
                    <TechTag key={t} name={t} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    <Modal open={open} onClose={() => setOpen(false)} labelledBy='project-modal-title'>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='flex h-64 w-full items-center justify-center overflow-hidden rounded-lg md:h-72 md:w-96 bg-transparent'>
          <img src={src} alt={`${h3} image`} className='max-h-full max-w-full object-contain' />
        </div>
        <div className='flex-1'>
          <div className='mb-2 flex items-center justify-between'>
            <h3 id='project-modal-title' className='font-display text-xl font-bold text-slate-100'>{h3}</h3>
            <div className='flex items-center gap-2'>
              {link && (
                <a href={link} target='_blank' rel='noreferrer' className='rounded-md border border-white/10 px-2 py-1 text-slate-300 hover:border-primary-500 hover:text-primary-400'>
                  <Github size={18} />
                </a>
              )}
              {site && (
                <a href={site} target='_blank' rel='noreferrer' className='rounded-md border border-white/10 px-2 py-1 text-slate-300 hover:border-primary-500 hover:text-primary-400'>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
          <p className='text-slate-300'>{p}</p>
          {tech.length > 0 && (
            <div className='mt-3 flex flex-wrap gap-2'>
              {tech.map((t) => (
                <TechTag key={t} name={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
    </>
  );
}

export default ProjectCard
