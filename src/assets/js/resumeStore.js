import profilePic from '../images/profile-min.JPG';
import eyLogo from '../images/ey.png';
import deloitteLogo from '../images/deloitte.png';
import minsaitLogo from '../images/minsait.jpg';
import accentureLogo from '../images/accenture.jpg';

export const profileInfo = {
  name: 'Fernando Alegria',
  jobTitle: 'Senior Software & DevOps Engineer',
  email: 'fernanalegria@gmail.com',
  phone: '+34 620 27 26 44',
  profilePic
};

export const siteLinks = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/fernando-alegria/',
    icon: 'fab fa-linkedin-in',
    text: 'linkedin.com/in/fernando-alegria'
  },
  {
    id: 2,
    href: 'https://github.com/fernanalegria/',
    icon: 'fab fa-github',
    text: 'github.com/fernanalegria'
  }
];

export const buttons = [];

export const careerSummary = [
  "I'm a Full-Stack Engineer with over 3 years of experience working with Front-End frameworks (React, Vue.js, Angular, ...) and developing REST APIs and data pipelines mostly with Django and Python. Although mobile and desktop apps are not my expertise, I do have some knowledge of React Native and Electron as well. As a self-taught developer, I love to keep learning and challenging myself everyday. In the short term, I would like to improve my DevOps and Cloud Computing skills.",
  'In terms of languages, I have developed a high level of English over the last few years. Especially during my stay in Ireland and these last two years at EY, thanks to such an international work environment I proudly belong to.',
  "These days, my focus is on further improving my coding and soft skills in order to grow my tech career. What's more, I love to help and learn from my teammates so that everyone knows and follows best practices. Only by doing so, can we offer high quality services up to the most demanding clients' standard."
];

export const workExperience = [
  {
    id: 1,
    jobTitle: {
      name: 'Senior Software & DevOps Engineer'
    },
    from: 'Aug 2019',
    to: 'Present',
    company: {
      name: 'EY',
      logo: eyLogo
    },
    projects: [
      {
        id: 1,
        heading: 'Global AI product development for Assurance',
        description: [
          'Built CI/CD pipelines with the aid of GitLab CI/CD to deploy our solution on-premises',
          'Definition and implementation of a Docker-based Django REST API architecture with support for asynchronous tasks and large data volumes and a client based on React and Redux',
          'Set up different environments to support development, QA, UAT and production work',
          'Implementation of a successful multitenant scheme and new features to leverage the existing solution as a global product'
        ],
        stack: [
          'Docker',
          'GitLab CI/CD',
          'Red Hat Linux',
          'React',
          'Redux',
          'Reactstrap',
          'Django',
          'MySQL',
          'Redis',
          'Celery',
          'MinIO'
        ]
      }
    ]
  },
  {
    id: 2,
    jobTitle: {
      name: 'Software Engineer'
    },
    from: 'Feb 2018',
    to: 'Jul 2019',
    company: {
      name: 'EY'
    },
    projects: [
      {
        id: 1,
        heading:
          "Design and implementation of an OCR solution's data pipeline and web interface",
        description:
          'Our solution aims to avoid tedious manual work to find very specific content among a large set of documents. Clients are able to consult the analyses run over their documents, and train the Machine Learning models by correcting any wrong assumptions made by the platform.',
        stack: [
          'Angular',
          'Bootstrap',
          'HTML5',
          'Scss',
          'Django',
          'SQL Server',
          'Redis',
          'Docker',
          'Kubernetes',
          'Azure DevOps',
          'Kibana'
        ]
      },
      {
        id: 2,
        heading:
          'Development of an ingestion pipeline to transform raw data into insightful analytics',
        description:
          'Our web platform is key to monitor the ingestion process and measure data quality. The entire platform was built with a wide range of cutting-edge technologies and the aid of an Agile software development methodology. Furthermore, Quality Assurance (QA) was enforced to deliver a robust asset, which is helpful across multiple industries.',
        stack: [
          'Vue.js',
          'JS',
          'Socket.IO',
          'Bootstrap',
          'HTML5',
          'CSS3',
          'Django',
          'Python',
          'SQL Server',
          'SQLite',
          'Apache Hive',
          'Selenium'
        ]
      }
    ]
  },
  {
    id: 3,
    jobTitle: {
      name: 'Front-End Web Developer'
    },
    from: 'Dec 2017',
    to: 'Feb 2018',
    company: {
      name: 'Deloitte Digital',
      logo: deloitteLogo
    },
    projects: [
      {
        id: 1,
        heading: 'Marketing web development for the pharmaceutical industry',
        description: '',
        stack: ['Umbraco', 'AngularJS', 'HTML', 'CSS']
      }
    ]
  },
  {
    id: 4,
    jobTitle: {
      name: 'Full-Stack Web Developer'
    },
    from: 'Oct 2016',
    to: 'Dec 2017',
    company: {
      name: 'Minsait',
      logo: minsaitLogo
    },
    projects: [
      {
        id: 1,
        heading:
          'Development and maintenance of a variety of solutions for the transport and logistics industry',
        description: [
          'Development of new and existing single-page applications (SPA).',
          'UX Design',
          'Support to solve defects from QA and UAT',
          'Software test plans and functional testing'
        ],
        stack: [
          'Ext JS',
          'Java',
          'Spring',
          'Hibernate',
          'SQL Server',
          'Jasper Reports',
          'JUnit',
          'Axure RP'
        ]
      }
    ]
  },
  {
    id: 5,
    jobTitle: {
      name: 'SAP Consultant',
      subcategory: 'Intern'
    },
    from: 'Aug 2015',
    to: 'Sept 2015',
    company: {
      name: 'Accenture',
      logo: accentureLogo
    },
    projects: [
      {
        id: 1,
        heading: 'SAP R/3 Bootcamp'
      }
    ]
  }
];

export const skillSets = [
  {
    id: 1,
    title: 'Frontend',
    weightable: true,
    items: [
      {
        name: 'JavaScript ES6+',
        value: 100
      },
      {
        name: 'React/Redux',
        value: 100
      },
      {
        name: 'Vue.JS/Angular',
        value: 80
      },
      {
        name: 'Bootstrap',
        value: 100
      },
      {
        name: 'HTML5/CSS3',
        value: 90
      }
    ]
  },
  {
    id: 2,
    title: 'Backend',
    weightable: true,
    items: [
      {
        name: 'Python/Django',
        value: 100
      },
      {
        name: 'Node.js',
        value: 90
      },
      {
        name: 'Java',
        value: 60
      }
    ]
  },
  {
    id: 3,
    title: 'Database',
    weightable: true,
    items: [
      {
        name: 'SQL Server/MySQL',
        value: 90
      },
      {
        name: 'Azure Blob Storage/MinIO',
        value: 90
      },
      {
        name: 'Redis',
        value: 75
      },
      {
        name: 'MongoDB',
        value: 60
      }
    ]
  },
  {
    id: 4,
    title: 'DevOps',
    weightable: true,
    items: [
      {
        name: 'GitLab CI/CD',
        value: 90
      },
      {
        name: 'Docker',
        value: 90
      }
    ]
  },
  {
    id: 5,
    title: 'Others',
    weightable: false,
    items: ['Agile', 'Unit Testing', 'Data Modelling', 'Responsive Design']
  }
];

export const education = [
  {
    id: 1,
    title: 'AWS Cloud DevOps Nanodegree',
    entity: 'Udacity',
    from: 'Jan 2020',
    to: 'Present'
  },
  {
    id: 2,
    title: 'React Developer Nanodegree',
    entity: 'Udacity',
    from: 'Nov 2018',
    to: 'Apr 2019'
  },
  {
    id: 3,
    title: 'BSc in Industrial Engineering',
    entity: 'Universidad Politécnica de Madrid (UPM)',
    from: '2010',
    to: '2015'
  }
];

export const volunteering = [
  {
    id: 1,
    title: 'Front-End Web Development Mentorship',
    entity: 'DKV Integralia Foundation in collaboration with Indra',
    from: 'Sept 2017',
    to: 'Nov 2017'
  }
];

export const languages = [
  {
    id: 1,
    language: 'Spanish',
    level: 'Native'
  },
  {
    id: 2,
    language: 'English',
    level: 'Professional'
  }
];

export const interests = [
  'Development cooperation',
  'Sustainability',
  'Travelling',
  'Cycling'
];
