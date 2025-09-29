import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      nav: {
        experience: 'Experiências',
        certifications: 'Certificações',
        projects: 'Projetos',
        skills: 'Skills',
        contact: 'Contato',
      },
      hero: {
        name: 'Guilherme',
        surname: 'Pereira',
        role: 'Cloud Architect & DevOps Engineer',
        tagline: 'Cloud Architect & DevOps Engineer — apaixonado por automação, IaC, CI/CD e arquiteturas escaláveis.',
        blurb: 'Projetando, automatizando e operando ambientes em nuvem com segurança, confiabilidade e custo sob controle.'
      },
      projects: {
        title: 'Projetos',
        arduino: { title: 'Robô Arduíno', desc: 'Seguidor, Bluetooth, Ultrassônico.', tech: ['C/C++', 'Arduino'] },
        listagreen: { title: 'Comunidade Lista Green', desc: 'Plataforma brasileira dedicada à economia verde.', tech: ['Next.js', 'Node.js', 'AWS'] },
        zabu: { title: 'Zabu Assistente de Discord', desc: 'Moderação, Assistência, Comandos.', tech: ['Python', 'Discord.py', 'Docker'] },
        recipes: { title: 'Site de Receitas', desc: 'Criação, edição, comentários e avaliações de receitas.', tech: ['Django', 'PostgreSQL'] },
        bakery: { title: 'Sistema CRUD para Padaria ', desc: 'Crie, Leia, Atualize e Delete', tech: ['Java', 'Spring', 'MySQL'] },
      },
      experience: {
        title: 'Experiências',
        items: [
          {
            company: 'Empresa X', role: 'Cloud Architect', period: '2023 — Atual',
            bullets: [
              'Desenho de arquitetura em AWS/Azure/GCP com foco em segurança e custo',
              'Adoção de IaC (Terraform) e pipelines CI/CD (GitHub Actions)'
            ],
          },
          {
            company: 'Empresa Y', role: 'DevOps Engineer', period: '2021 — 2023',
            bullets: [
              'Observabilidade com Prometheus/Grafana e práticas SRE',
              'Automação de deploy com Kubernetes e ArgoCD'
            ],
          }
        ]
      },
      certifications: {
        title: 'Certificações',
        blurb: 'Principais certificações em Cloud e DevOps.',
        items: [
          { name: 'AWS Certified Solutions Architect – Associate', org: 'AWS', year: '2024', url: 'https://www.credly.com/' },
          { name: 'Azure Administrator Associate (AZ-104)', org: 'Microsoft', year: '2023', url: 'https://learn.microsoft.com/' },
          { name: 'Oracle Cloud Infrastructure Architect Associate', org: 'Oracle', year: '2023', url: 'https://education.oracle.com/' },
          { name: 'CKA – Certified Kubernetes Administrator', org: 'CNCF', year: '2024', url: 'https://training.linuxfoundation.org/' },
          { name: 'Docker Certified Associate', org: 'Docker', year: '2022', url: 'https://success.docker.com/certification' },
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          { title: 'Cloud', items: ['AWS', 'Azure', 'OCI', 'GCP'] },
          { title: 'IaC & Config', items: ['Terraform', 'CloudFormation', 'Ansible'] },
          { title: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'] },
          { title: 'Containers & Orquestração', items: ['Docker', 'Kubernetes', 'Helm'] },
          { title: 'Observabilidade', items: ['Prometheus', 'Grafana', 'ELK/OpenSearch'] },
          { title: 'Linguagens', items: ['Python', 'JavaScript/TypeScript', 'Go (básico)'] },
        ]
      },
      contact: {
        title: 'Contato',
        cta: 'Falar no WhatsApp',
        blurb: 'Entre em contato para conversar sobre projetos de Cloud, DevOps, automação e arquitetura. Responderei o mais rápido possível.'
      },
      footer: {
        copyright: 'Todos os Direitos Reservados.'
      },
      buttons: {
        downloadCV: 'Baixar Currículo',
        contactMe: 'Entrar em contato'
      }
    }
  },
  en: {
    translation: {
      nav: {
        experience: 'Experience',
        certifications: 'Certifications',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        name: 'Guilherme',
        surname: 'Pereira',
        role: 'Cloud Architect & DevOps Engineer',
        tagline: 'Cloud Architect & DevOps Engineer — passionate about automation, IaC, CI/CD and scalable architectures.',
        blurb: 'Designing, automating and operating cloud environments with security, reliability and cost under control.'
      },
      projects: {
        title: 'Projects',
        arduino: { title: 'Arduino Robot', desc: 'Line Follower, Bluetooth, Ultrasonic.', tech: ['C/C++', 'Arduino'] },
        listagreen: { title: 'Lista Green Community', desc: 'Brazilian platform dedicated to the green economy.', tech: ['Next.js', 'Node.js', 'AWS'] },
        zabu: { title: 'Zabu Discord Assistant', desc: 'Moderation, Assistance, Commands.', tech: ['Python', 'Discord.py', 'Docker'] },
        recipes: { title: 'Recipe Website', desc: 'Create, edit, comment and rate recipes.', tech: ['Django', 'PostgreSQL'] },
        bakery: { title: 'Bakery CRUD System', desc: 'Create, Read, Update and Delete', tech: ['Java', 'Spring', 'MySQL'] },
      },
      experience: {
        title: 'Experience',
        items: [
          {
            company: 'Company X', role: 'Cloud Architect', period: '2023 — Present',
            bullets: [
              'Architecting on AWS/Azure/GCP focusing on security and cost',
              'Adoption of IaC (Terraform) and CI/CD pipelines (GitHub Actions)'
            ],
          },
          {
            company: 'Company Y', role: 'DevOps Engineer', period: '2021 — 2023',
            bullets: [
              'Observability with Prometheus/Grafana and SRE practices',
              'Automated deployments with Kubernetes and ArgoCD'
            ],
          }
        ]
      },
      certifications: {
        title: 'Certifications',
        blurb: 'Key Cloud and DevOps certifications.',
        items: [
          { name: 'AWS Certified Solutions Architect – Associate', org: 'AWS', year: '2024', url: 'https://www.credly.com/' },
          { name: 'Azure Administrator Associate (AZ-104)', org: 'Microsoft', year: '2023', url: 'https://learn.microsoft.com/' },
          { name: 'Oracle Cloud Infrastructure Architect Associate', org: 'Oracle', year: '2023', url: 'https://education.oracle.com/' },
          { name: 'CKA – Certified Kubernetes Administrator', org: 'CNCF', year: '2024', url: 'https://training.linuxfoundation.org/' },
          { name: 'Docker Certified Associate', org: 'Docker', year: '2022', url: 'https://success.docker.com/certification' },
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          { title: 'Cloud', items: ['AWS', 'Azure', 'OCI', 'GCP'] },
          { title: 'IaC & Config', items: ['Terraform', 'CloudFormation', 'Ansible'] },
          { title: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'] },
          { title: 'Containers & Orchestration', items: ['Docker', 'Kubernetes', 'Helm'] },
          { title: 'Observability', items: ['Prometheus', 'Grafana', 'ELK/OpenSearch'] },
          { title: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'Go (basic)'] },
        ]
      },
      contact: {
        title: 'Contact',
        cta: 'WhatsApp me',
        blurb: 'Reach out to discuss Cloud, DevOps, automation and architecture projects. I will reply ASAP.'
      },
      footer: {
        copyright: 'All Rights Reserved.'
      },
      buttons: {
        downloadCV: 'Download Resume',
        contactMe: 'Get in touch'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  })

export default i18n


