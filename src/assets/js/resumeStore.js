import profilePic from '../images/profile-min.JPG';
import amazonLogo from '../images/amazon.png';
import eyLogo from '../images/ey.png';
import deloitteLogo from '../images/deloitte.png';
import minsaitLogo from '../images/minsait.jpg';
import accentureLogo from '../images/accenture.jpg';

export const profileInfo = {
  name: 'Fernando Alegria',
  jobTitle: 'Senior Software Engineer',
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

export const careerSummary = [
  "I'm a Full-Stack Engineer with over 4 years of experience working with Front-End frameworks (React, Vue.js, Angular, ...) and developing REST APIs and data pipelines mostly with Django and Python. Although mobile development is not my area of expertise, I do have some knowledge of React Native as well including a portfolio of a couple of mobile apps. As a self-taught developer, I love to keep learning and challenging myself everyday. In the short term, I would like to take my consolidated React knowledge to the next level and also earn the AWS developer certification.",
  "In terms of languages, I have developed a high level of English over the last few years. Especially during my stay in Ireland and these last three years at Amazon and EY, thanks to the enriching international environment I've belonged to. Currently, I'm also learning French in my free time.",
  "My focus is always on further improving my coding and soft skills. Furthermore, I consider mentoring and team collaboration a must. I love to help and learn from my teammates so that everyone knows and follows best practices. Only by doing so, can we offer high quality services up to the most demanding clients' standard."
];

export const workExperience = [
  {
    id: 1,
    jobTitle: {
      name: 'Software Development Engineer'
    },
    from: 'Jul 2020',
    to: 'Present',
    company: {
      name: 'Amazon Business',
      logo: amazonLogo
    },
    projects: [
      {
        id: 1,
        heading: 'Amazon Business Delivery Experience',
        description:
          'I have been contributing to AB DEX organization goals since I joined the firm. It comprises a set of systems that allow B2B customers to provide delivery preferences for their organizations as a way to improve the post-checkout experience. As a service owner, I take care of designing, building and maintaining our services and infrastructure. As an engineer, I also contribute to operational excellence tasks that help us keep the bar high when it comes to service availability and performance.',
        stack: [
          'React',
          'Redux',
          'Java',
          'AWS Lambda',
          'SQS',
          'SNS',
          'ECS',
          'DynamoDB',
          'CloudFormation'
        ]
      }
    ]
  },
  {
    id: 2,
    jobTitle: {
      name: 'Senior Software & DevOps Engineer'
    },
    from: 'Aug 2019',
    to: 'Jun 2020',
    company: {
      name: 'EY AI Innovation Center',
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
          'React',
          'Redux',
          'Reactstrap',
          'Python/Django',
          'MySQL',
          'Redis',
          'Celery',
          'MinIO'
        ]
      }
    ]
  },
  {
    id: 3,
    jobTitle: {
      name: 'Software Engineer'
    },
    from: 'Feb 2018',
    to: 'Jul 2019',
    company: {
      name: 'EY AI Innovation Center'
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
          'Python/Django',
          'SQL Server',
          'Redis',
          'Docker',
          'Kubernetes',
          'Azure DevOps'
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
          'Socket.IO',
          'Bootstrap',
          'HTML5',
          'CSS3',
          'Python/Django',
          'SQL Server',
          'Apache Hive',
          'Selenium'
        ]
      }
    ]
  },
  {
    id: 4,
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
    id: 5,
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
          'Development, maintenance and UI/UX Design of a variety of solutions for the transport and logistics industry',
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
    id: 6,
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
    ],
    printable: false
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
        name: 'Vue.js/Angular',
        value: 80
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
        value: 75
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
        value: 100
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
    title: 'Cloud',
    weightable: true,
    items: [
      {
        name: 'AWS',
        value: 80
      },
      {
        name: 'Azure',
        value: 50
      }
    ]
  },
  {
    id: 5,
    title: 'DevOps',
    weightable: true,
    items: [
      {
        name: 'Docker',
        value: 100
      },
      {
        name: 'GitLab CI/Jenkins/CircleCI',
        value: 90
      },
      {
        name: 'Kubernetes/Docker Swarm',
        value: 60
      }
    ]
  },
  {
    id: 6,
    title: 'Others',
    weightable: false,
    items: [
      'Agile',
      'QA',
      'Data Modelling',
      'Mobile Development',
      'UI/UX Design',
      'Responsive Design'
    ]
  }
];

export const education = [
  {
    id: 1,
    title: 'Cloud DevOps Nanodegree',
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

export const interests = ['Sustainability', 'Travelling', 'Cycling/Hiking'];
