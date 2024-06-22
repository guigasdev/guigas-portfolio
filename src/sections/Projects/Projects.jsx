import styles from './ProjectsStyle.module.css';
import arduinoRobot from '../../assets/arduino-robot.jpg';
import ProjectCard from '../../common/ProjectCard';
import bakeCard from '../../assets/bake-cartoon-crud.jpg'
import greenstepCard from '../../assets/green-step-logo.jpg'
import zabuCard from '../../assets/zabu-logo.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projetos</h1>
        <div className={styles.projectsContainer}>
        < ProjectCard
            src={arduinoRobot}
            link={'https://github.com/guigasdev/arduino-robot'}
            h3={'Robô Arduíno'}
            p={'Controle Bluetooth, Seguidor de Linha e Sensor Ultrassônico'}
        />
         < ProjectCard
            src={bakeCard}
            link={'https://github.com/guigasdev/backend_padaria'}
            h3={'Sistema CRUD para Padaria '}
            p={'Cread, Read, Update e Delete'}
        />
         < ProjectCard
            src={greenstepCard}
            link={'https://github.com/guigasdev/greenstep'}
            h3={'Aplicativo GreenStep'}
            p={'Sustentabilidade, Reciclagem e Biodiversidade'}
        />
          < ProjectCard
            src={zabuCard}
            link={'https://github.com/guigasdev/zabu-bot-discord'}
            h3={'Zabu Assistente de Discord'}
            p={'Moderação, Assistência, Comandos'}
        />
        </div>
    </section>
  )
}

export default Projects
