import styles from './ProjectsStyle.module.css';
import arduinoRobot from '../../assets/arduino-robot.jpg';
import ProjectCard from '../../common/ProjectCard';
import bakeCard from '../../assets/bake-cartoon-crud.jpg'
import recipeCard from '../../assets/recipe-website-logo.jpg'
import zabuCard from '../../assets/zabu-logo.png'
import listaCard from '../../assets/image.png'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projetos</h1>
        <div className={styles.projectsContainer}>
        < ProjectCard
            src={arduinoRobot}
            link={'https://github.com/guigasdev/arduino-robot'}
            h3={'Robô Arduíno'}
            p={`Seguidor, Bluetooth, Ultrassônico.`}
        />
         < ProjectCard
            src={listaCard}
            link={'https://www.listagreen.com.br'}
            h3={'Comunidade Lista Green'}
            p={'A primeira plataforma brasileira 100% dedicada a promover a economia verde em todo o nosso país!'}
        />
          < ProjectCard
            src={zabuCard}
            link={'https://github.com/guigasdev/zabu-bot-discord'}
            h3={'Zabu Assistente de Discord'}
            p={'Moderação, Assistência, Comandos.'}
        />
            < ProjectCard
            src={recipeCard}
            link={'https://github.com/guigasdev/django-project-course'}
            h3={'Site de Receitas'}
            p={'Criação, edição, comentários e avaliações de receitas.'}
        />
            < ProjectCard
              src={bakeCard}
              link={'https://github.com/guigasdev/backend_padaria'}
              h3={'Sistema CRUD para Padaria '}
              p={'Crie, Leia, Atualize e Delete'}
          />
          
        </div>
    </section>
  )
}

export default Projects
