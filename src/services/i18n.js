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
        visionqa: { title: 'VisionQA', desc: 'Pipeline de OCR com IA no Azure: faça upload de imagens ou texto e obtenha respostas instantâneas.', tech: ['Azure', 'OCR', 'AI', 'Terraform', 'IaC', 'CI/CD', 'Full-Stack'] }
      },
      experience: {
        title: 'Experiências',
        items: [
          {
            company: 'Lanlink', role: 'Cloud Architecture', period: '11/2024 — Atual',
            bullets: [
              'Desenho de arquitetura em Azure/OCI com foco em segurança e custo',
              'Adoção de IaC (Terraform) e pipelines CI/CD (GitHub Actions)',
              'Apoio ao time de arquitetura de soluções, garantindo alinhamento entre requisitos técnicos e comerciais',
              'Elaboração de propostas técnicas de baixa complexidade e alto volume em segurança da informação e infraestrutura de T.I.',
              'Integração de soluções para ambientes on-premise, nuvens privadas e públicas',
              'Trabalhos com tecnologias líderes como Microsoft, Oracle, VMware e Veeam',
              'Colaboração interdepartamental com clientes, equipe comercial e técnica',
              'Análise técnica de requisitos para propor arquiteturas de soluções alinhadas aos objetivos organizacionais'
            ],
          },

        ]
      },
      certifications: {
        title: 'Certificações',
        blurb: 'Principais certificações em Cloud e DevOps.',
        items: [
          { name: 'Oracle Cloud Infrastructure Foundations Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=FCEE8273535928A350E98E77110502D5D61C051761BEA2CAA7A26A6A839EC1C2' },
          { name: 'Watsonx.AI Generative AI Foundations', org: 'IBM', year: '2025', url: 'https://www.credly.com/badges/2d4089f4-c7c2-4168-aeea-2104f40507e0' },
          { name: 'Oracle Cloud Infrastructure Architect Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D75D4499FBF690A50292C68FAAD9458F4C2E1D4F19E8F595CD8DB85812D7C3D4' },
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          { title: 'Cloud', items: ['AWS', 'Azure', 'OCI', 'GCP'] },
          { title: 'IaC & Config', items: ['Terraform', 'CloudFormation', 'Ansible'] },
          { title: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'Azure DevOps'] },
          { title: 'Containers & Orquestração', items: ['Docker', 'Kubernetes'] },
          { title: 'Observabilidade', items: ['Zabbix'] },
          { title: 'Linguagens', items: ['Python', 'JavaScript/TypeScript', 'Java'] },
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
        visionqa: { title: 'VisionQA', desc: 'AI-powered OCR pipeline on Azure: upload images or text and get instant answers.', tech: ['Azure', 'OCR', 'AI', 'Terraform', 'IaC', 'CI/CD', 'Full-Stack'] },
      },
      experience: {
        title: 'Experience',
        items: [
          {
            company: 'Lanlink', role: 'Cloud Architecture', period: '11/2024 — Present',
            bullets: [
              'Architecting on Azure/OCI focusing on security and cost',
              'Adoption of IaC (Terraform) and CI/CD pipelines (GitHub Actions)',
              'Support to the solutions architecture team, ensuring alignment between technical and business requirements',
              'Development of high-volume, low-complexity technical proposals in information security and IT infrastructure',
              'Integration of solutions across on-premise, private, and public cloud environments',
              'Hands-on experience with leading technologies such as Microsoft, Oracle, VMware, and Veeam',
              'Cross-department collaboration with clients, sales, and technical teams',
              'Technical requirements analysis to propose solution architectures aligned with organizational goals'
            ],
          },
        ]
      },
      certifications: {
        title: 'Certifications',
        blurb: 'Key Cloud and DevOps certifications.',
        items: [
          { name: 'Oracle Cloud Infrastructure Foundations Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=FCEE8273535928A350E98E77110502D5D61C051761BEA2CAA7A26A6A839EC1C2' },
          { name: 'Watsonx.AI Generative AI Foundations', org: 'IBM', year: '2025', url: 'https://www.credly.com/badges/2d4089f4-c7c2-4168-aeea-2104f40507e0' },
          { name: 'Oracle Cloud Infrastructure Architect Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D75D4499FBF690A50292C68FAAD9458F4C2E1D4F19E8F595CD8DB85812D7C3D4' },
        ]
      },
      skills: {
        title: 'Skills',
        categories: [
          { title: 'Cloud', items: ['AWS', 'Azure', 'OCI', 'GCP'] },
          { title: 'IaC & Config', items: ['Terraform', 'CloudFormation', 'Ansible'] },
          { title: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'Azure DevOps'] },
          { title: 'Containers & Orquestração', items: ['Docker', 'Kubernetes'] },
          { title: 'Observabilidade', items: ['Zabbix'] },
          { title: 'Linguagens', items: ['Python', 'JavaScript/TypeScript', 'Java'] },
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


