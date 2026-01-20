import styles from './ProjectsStyle.module.css';
import arduinoRobot from '../../assets/arduino-robot.jpg';
import ProjectCard from '../../common/ProjectCard';
import bakeCard from '../../assets/bake-cartoon-crud.jpg'
import sumAiCard from '../../assets/sum-ai-card.png'
import zabuCard from '../../assets/zabu-logo.png'
import listaCard from '../../assets/image.png'
import visionqa from '../../assets/visionqa.jpg'
import { useTranslation } from 'react-i18next'

function Projects() {
  const { t } = useTranslation();
  const P = t('projects', { returnObjects: true });

  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>{P.title}</h1>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          src={arduinoRobot}
          link={'https://github.com/guigasdev/arduino-robot'}
          h3={P.arduino.title}
          p={P.arduino.desc}
          tech={P.arduino.tech}
        />
        <ProjectCard
          src={listaCard}
          link={'https://github.com/guigasdev'}
          site={'https://www.listagreen.com.br'}
          h3={P.listagreen.title}
          p={P.listagreen.desc}
          tech={P.listagreen.tech}
        />
        <ProjectCard
          src={visionqa}
          link={'https://github.com/guigasdev/VisionQA'}
          h3={P.visionqa.title}
          p={P.visionqa.desc}
          tech={P.visionqa.tech}
        />
        <ProjectCard
          src={zabuCard}
          link={'https://github.com/guigasdev/zabu-bot-discord'}
          h3={P.zabu.title}
          p={P.zabu.desc}
          tech={P.zabu.tech}
        />
        <ProjectCard
          src={sumAiCard}
          link={'https://github.com/guigasdev/SumAI'}
          site={'https://ai-sum.azurewebsites.net'}
          h3={P.sumai.title}
          p={P.sumai.desc}
          tech={P.sumai.tech}
        />
        <ProjectCard
          src={bakeCard}
          link={'https://github.com/guigasdev/backend_padaria'}
          h3={P.bakery.title}
          p={P.bakery.desc}
          tech={P.bakery.tech}
        />
      </div>
    </section>
  )
}

export default Projects
