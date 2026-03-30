import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      nav: {
        experience: 'Experiências',
        certifications: 'Certificações',
        architectures: 'Arquiteturas',
        projects: 'Projetos',
        skills: 'Skills',
        contact: 'Contato',
      },
      hero: {
        name: 'Guilherme',
        surname: 'Pereira',
        role: 'Cloud Architect & DevOps Engineer',
        tagline: 'Cloud Architect & DevOps Engineer — especialista em arquiteturas Azure & OCI, IaC (Terraform) e Automação CI/CD.',
        blurb: 'Focado em desenhar infraestruturas escaláveis, seguras e otimizadas em custo, utilizando as melhores práticas de Cloud Native e DevOps.'
      },
      architectures: {
        title: 'Arquiteturas de Referência',
        items: [
          {
            id: 'azure-ref-arch',
            title: 'Arquitetura de Referência Azure (PaaS/Container)',
            image: 'azure-architecture.png',
            summary: 'Design de infraestrutura escalável utilizando Azure Container Apps e Front Door.',
            description: 'Esta arquitetura foi desenhada para suportar microserviços e APIs de forma escalável e segura. O Azure Front Door atua como o ponto de entrada global, oferecendo WAF, CDN e balanceamento de carga. O Azure Container Apps gerencia a execução dos containers com auto-scaling (KEDA).',
            details: [
              'Camada de Borda: Azure Front Door com WAF para proteção contra ameaças OWASP e aceleração de conteúdo via CDN.',
              'Identidade: Integração com Microsoft Entra ID para autenticação moderna (OAuth2/OIDC) e RBAC.',
              'Segurança: Managed Identities para comunicação segura entre serviços, eliminando a necessidade de gerenciar segredos em código.',
              'Camada de Dados: PostgreSQL gerenciado para persistência relacional e Redis Cache para alta performance e gerenciamento de sessões.',
              'Observabilidade: Azure Monitor integrado para coleta de logs, métricas e dashboards em tempo real.',
              'Conformidade: Desenho seguindo padrões Zero Trust, LGPD e ISO 27001.'
            ],
            tech: ['Azure', 'Container Apps', 'Front Door', 'PostgreSQL', 'Key Vault']
          }
        ]
      },
      projects: {
        title: 'Projetos de Cloud & DevOps',
        visionqa: {
          title: 'VisionQA – Pipeline de OCR Cloud-Native',
          desc: 'Arquitetura completa de extração de texto (OCR) com IA no Azure. Utiliza Terraform para provisionamento de infraestrutura (IaC) e GitHub Actions para CI/CD.',
          tech: ['Azure', 'Terraform', 'GitHub Actions', 'AI', 'OCR', 'Full-Stack']
        },
        sumai: {
          title: 'SumAI – IA Distribuída na Nuvem',
          desc: 'Aplicação cloud-native para tradução e sumarização de textos utilizando Azure AI Foundry e App Service, com foco em escalabilidade e automação de deploy.',
          tech: [
            'Azure AI',
            'Azure App Service',
            'GitHub Actions',
            'Python',
            'CI/CD'
          ]
        },
        listagreen: {
          title: 'Comunidade Lista Green',
          desc: 'Modernização de plataforma para economia verde com foco em infraestrutura resiliente e performance.',
          tech: ['Next.js', 'Node.js', 'AWS', 'Resilience']
        },
        zabu: {
          title: 'Zabu – Automação de Infraestrutura',
          desc: 'Bot de automação e assistência para Discord, containerizado com Docker para portabilidade e consistência entre ambientes.',
          tech: ['Docker', 'Python', 'Discord.py', 'Automation']
        }
      },
      experience: {
        title: 'Experiência Profissional',
        items: [
          {
            company: 'Lanlink', role: 'Cloud Solutions Architect', period: '11/2024 — Atual',
            bullets: [
              'Desenho e implementação de arquiteturas em Azure e OCI, com foco em segurança, governança e otimização de custos.',
              'Adoção estratégica de IaC com Terraform para garantir consistência e agilidade no provisionamento de ambientes.',
              'Apoio ao time comercial, garantindo alinhamento entre requisitos técnicos e comerciais',
              'Implementação de pipelines de CI/CD (GitHub Actions/Azure DevOps) para automação de deployments e processos de governança.',
              'Elaboração de propostas técnicas integrando soluções on-premise, cloud, multicloud, hibrido.',
              'Colaboração direta com clientes para alinhar arquiteturas tecnológicas aos objetivos estratégicos do negócio.',
              'Trabalho com tecnologias líderes de mercado: Microsoft Azure, Oracle Cloud (OCI), VMware e Veeam.'
            ],
          },
        ]
      },
      certifications: {
        title: 'Certificações Cloud',
        blurb: 'Especialização contínua em Azure, OCI e tecnologias DevOps.',
        items: [
          { name: 'Oracle Cloud Infrastructure Architect Professional', org: 'Oracle', year: '2025', url: '#' },
          { name: 'Oracle Cloud Infrastructure Architect Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D75D4499FBF690A50292C68FAAD9458F4C2E1D4F19E8F595CD8DB85812D7C3D4' },
          { name: 'Oracle Cloud Infrastructure Foundations Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=FCEE8273535928A350E98E77110502D5D61C051761BEA2CAA7A26A6A839EC1C2' },
          { name: 'Watsonx.AI Generative AI Foundations', org: 'IBM', year: '2025', url: 'https://www.credly.com/badges/2d4089f4-c7c2-4168-aeea-2104f40507e0' },
        ]
      },
      skills: {
        title: 'Stack Tecnológica',
        categories: [
          { title: 'Cloud Providers', items: ['Azure', 'OCI (Oracle Cloud)', 'AWS', 'GCP'] },
          { title: 'Infra as Code (IaC)', items: ['Terraform', 'Ansible', 'ARM Templates'] },
          { title: 'CI/CD & DevOps', items: ['GitHub Actions', 'Azure DevOps', 'Jenkins'] },
          { title: 'Containers & Kubernetes', items: ['Docker', 'Kubernetes (AKS/OKE)'] },
          { title: 'Observabilidade & Segurança', items: ['Zabbix', 'Azure Monitor', 'CloudGuard'] },
          { title: 'Desenvolvimento & Scripting', items: ['Python', 'Shell Script', 'JavaScript/TypeScript'] },
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
        contactMe: 'Entrar em contato',
        viewDetails: 'Ver Detalhes'
      }
    }
  },
  en: {
    translation: {
      nav: {
        experience: 'Experience',
        certifications: 'Certifications',
        architectures: 'Architectures',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        name: 'Guilherme',
        surname: 'Pereira',
        role: 'Cloud Architect & DevOps Engineer',
        tagline: 'Cloud Architect & DevOps Engineer — specialized in Azure & OCI architectures, IaC (Terraform) and CI/CD Automation.',
        blurb: 'Focused on designing scalable, secure and cost-optimized infrastructures, using Cloud Native and DevOps best practices.'
      },
      architectures: {
        title: 'Reference Architectures',
        items: [
          {
            id: 'azure-ref-arch',
            title: 'Azure Reference Architecture (PaaS/Container)',
            image: 'azure-architecture.png',
            summary: 'Scalable and secure infrastructure design using Azure Container Apps and Front Door.',
            description: 'This architecture was designed to support microservices and APIs in a scalable and secure manner. Azure Front Door acts as the global entry point, offering WAF, CDN, and load balancing. Azure Container Apps manages container execution with auto-scaling (KEDA).',
            details: [
              'Edge Layer: Azure Front Door with WAF for protection against OWASP threats and CDN content acceleration.',
              'Identity: Integration with Microsoft Entra ID for modern authentication (OAuth2/OIDC) and RBAC.',
              'Security: Managed Identities for secure communication between services, eliminating the need to manage secrets in code.',
              'Data Layer: Managed PostgreSQL for relational persistence and Redis Cache for high performance and session management.',
              'Observability: Integrated Azure Monitor for real-time logs, metrics, and dashboards collection.',
              'Compliance: Design following Zero Trust, LGPD/GDPR, and ISO 27001 standards.'
            ],
            tech: ['Azure', 'Container Apps', 'Front Door', 'PostgreSQL', 'Key Vault']
          }
        ]
      },
      projects: {
        title: 'Cloud & DevOps Projects',
        visionqa: {
          title: 'VisionQA – Cloud-Native OCR Pipeline',
          desc: 'End-to-end AI-powered text extraction (OCR) architecture on Azure. Uses Terraform for infrastructure provisioning (IaC) and GitHub Actions for CI/CD.',
          tech: ['Azure', 'Terraform', 'GitHub Actions', 'AI', 'OCR', 'Full-Stack']
        },
        sumai: {
          title: 'SumAI – Distributed Cloud AI',
          desc: 'Cloud-native application for text translation and summarization using Azure AI Foundry and App Service, focused on scalability and deployment automation.',
          tech: [
            'Azure AI',
            'Azure App Service',
            'GitHub Actions',
            'Python',
            'CI/CD'
          ]
        },
        listagreen: {
          title: 'Lista Green Community',
          desc: 'Platform modernization for the green economy with a focus on resilient infrastructure and performance.',
          tech: ['Next.js', 'Node.js', 'AWS', 'Resilience']
        },
        zabu: {
          title: 'Zabu – Infrastructure Automation',
          desc: 'Automation and assistance bot for Discord, containerized with Docker for portability and environment consistency.',
          tech: ['Docker', 'Python', 'Discord.py', 'Automation']
        }
      },
      experience: {
        title: 'Professional Experience',
        items: [
          {
            company: 'Lanlink', role: 'Cloud Solutions Architect', period: '11/2024 — Present',
            bullets: [
              'Design and implementation of architectures on Azure and OCI, focusing on security, governance and cost optimization.',
              'Strategic adoption of IaC with Terraform to ensure consistency and agility in environment provisioning.',
              'Support to the sales team, ensuring alignment between technical and business requirements.',
              'Implementation of CI/CD pipelines (GitHub Actions/Azure DevOps) for deployment automation and governance processes.',
              'Development of technical proposals integrating on-premise, cloud, multicloud, and hybrid solutions.',
              'Direct collaboration with clients to align technological architectures with strategic business goals.',
              'Working with market-leading technologies: Microsoft Azure, Oracle Cloud (OCI), VMware and Veeam.'
            ],
          },
        ]
      },
      certifications: {
        title: 'Cloud Certifications',
        blurb: 'Continuous specialization in Azure, OCI and DevOps technologies.',
        items: [
          { name: 'Oracle Cloud Infrastructure Architect Professional', org: 'Oracle', year: '2025', url: '#' },
          { name: 'Oracle Cloud Infrastructure Architect Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D75D4499FBF690A50292C68FAAD9458F4C2E1D4F19E8F595CD8DB85812D7C3D4' },
          { name: 'Oracle Cloud Infrastructure Foundations Associate', org: 'Oracle', year: '2025', url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=FCEE8273535928A350E98E77110502D5D61C051761BEA2CAA7A26A6A839EC1C2' },
          { name: 'Watsonx.AI Generative AI Foundations', org: 'IBM', year: '2025', url: 'https://www.credly.com/badges/2d4089f4-c7c2-4168-aeea-2104f40507e0' },
        ]
      },
      skills: {
        title: 'Tech Stack',
        categories: [
          { title: 'Cloud Providers', items: ['Azure', 'OCI (Oracle Cloud)', 'AWS', 'GCP'] },
          { title: 'Infra as Code (IaC)', items: ['Terraform', 'Ansible', 'ARM Templates'] },
          { title: 'CI/CD & DevOps', items: ['GitHub Actions', 'Azure DevOps', 'Jenkins'] },
          { title: 'Containers & Kubernetes', items: ['Docker', 'Kubernetes (AKS/OKE)'] },
          { title: 'Observability & Security', items: ['Zabbix', 'Azure Monitor', 'CloudGuard'] },
          { title: 'Development & Scripting', items: ['Python', 'Shell Script', 'JavaScript/TypeScript'] },
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
        contactMe: 'Get in touch',
        viewDetails: 'View Details'
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


