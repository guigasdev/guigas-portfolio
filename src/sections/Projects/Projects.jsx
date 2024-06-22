import styles from './ProjectsStyle.module.css';
import arduinoRobot from '../../assets/arduino-robot.jpg';
import ProjectCard from '../../common/ProjectCard';
import bakeCard from '../../assets/bake-cartoon-crud.jpg'
import greenstepCard from '../../assets/green-step-logo.jpg'
import zabuCard from '../../assets/zabu-logo.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        < ProjectCard
            src={arduinoRobot}
            link={'https://github.com/guigasdev/arduino-robot'}
            h3={'Arduino Robot'}
            p={'Bluetooth control, Line Follower and Ultrassonic Sensor'}
        />
         < ProjectCard
            src={bakeCard}
            link={'https://github.com/guigasdev/backend_padaria'}
            h3={'Bakery Backend System'}
            p={'Cread, Read, Update and Delete'}
        />
         < ProjectCard
            src={greenstepCard}
            link={'https://github.com/guigasdev/greenstep'}
            h3={'Greenstep App'}
            p={'Sustainability, recycle and biodiversity app'}
        />
          < ProjectCard
            src={zabuCard}
            link={'https://github.com/guigasdev/zabu-bot-discord'}
            h3={'Zabu Discord Assistent'}
            p={'Moderation, assistance, commands'}
        />
        </div>
    </section>
  )
}

export default Projects
