import profilePic from '../images/profile-min.JPG';
import eyLogo from '../images/ey.png';
import deloitteLogo from '../images/deloitte.png';
import minsaitLogo from '../images/minsait.jpg';
import accentureLogo from '../images/accenture.jpg';

export const profileInfo = {
  name: 'Fernando Alegria',
  jobTitle: 'Full-Stack Web Developer',
  email: 'fernanalegria@gmail.com',
  phone: '+34 620 27 26 44',
  profilePic
};

export const siteLinks = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/fernando-alegria/',
    icon: ['fab', 'linkedin-in'],
    text: 'linkedin.com/in/fernando-alegria'
  },
  {
    id: 2,
    href: 'https://github.com/fernanalegria/',
    icon: ['fab', 'github'],
    text: 'github.com/fernanalegria'
  },
  {
    id: 3,
    href: '',
    icon: ['fas', 'file-pdf'],
    text: 'Download PDF version'
  }
];

export const careerSummary = [
  'I graduated from the Technical University of Madrid (UPM) in 2015 with a BSc in Industrial Engineering. Soon after, my tech enthusiasm led me towards a career in Web Development. I am a Full-Stack Web Developer with a focus on JS frameworks, currently working at EY’s AI Centre of Excellence. As a self-taught developer, I love to challenge myself everyday. Mobile development is my next ambition.',
  'In terms of languages, I have developed a high level of English over the last few years. Especially during my stay in Ireland, where I obtained the Certificate in Advanced English (CAE), and this last year at EY thanks to such an international work environment I proudly belong to.',
  "These days, my focus is on further improving my coding skills in order to grow my tech career. What's more, I love to help and learn from my teammates so that everyone knows and follows best practices. Only by doing so, can we offer high quality services up to the most demanding clients' standard."
];

export const workExperience = [
  {
    id: 1,
    jobTitle: 'Full-Stack Web Developer',
    from: 'Feb 2018',
    to: 'Present',
    company: {
      name: 'EY',
      logo: eyLogo
    },
    projects: [
      {
        id: 1,
        heading:
          'Development of an ingestion pipeline to transform massive data into insightful analytics',
        description:
          'The web platform is key to monitor the ingestion process and measure data quality. The entire platform was built with a wide range of cutting-edge technologies and the aid of an Agile software development methodology. Furthermore, Quality Assurance (QA) was enforced to deliver a robust asset, which is helpful across multiple industries.',
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
      },
      {
        id: 2,
        heading: "Development of an OCR tool's web interface",
        description:
          'The platform is designed to extract specific content from a large set of scanned documents. Users are able to consult the analysis run over their documents and retrain the OCR algorithms by correcting any wrong assumptions made by the platform.',
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
          'Azure DevOps'
        ]
      }
    ]
  },
  {
    id: 2,
    jobTitle: 'Front-End Web Developer',
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
        description:
          'Development of newsletters and microsites to launch ad campaigns',
        stack: ['HTML', 'CSS']
      },
      {
        id: 2,
        heading: "Maintenance of an insurance client's public website",
        description:
          'SEO strategy was of high importance for the brand to be well positioned in the market. I helped the marketing team upload content to the website through a CMS.',
        stack: ['Umbraco', 'AngularJS', 'HTML', 'CSS']
      }
    ]
  },
  {
    id: 3,
    jobTitle: 'Full-Stack Web Developer',
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
    id: 4,
    jobTitle: {
      name: 'Software Engineer',
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
        name: 'JavaScript ES5/ES6',
        value: 100
      },
      {
        name: 'React/Redux',
        value: 100
      },
      {
        name: 'Vue.JS',
        value: 80
      },
      {
        name: 'Angular',
        value: 80
      },
      {
        name: 'Bootstrap',
        value: 100
      },
      {
        name: 'HTML5/CSS3',
        value: 85
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
        name: 'Java',
        value: 70
      }
    ]
  },
  {
    id: 3,
    title: 'Database',
    weightable: true,
    items: [
      {
        name: 'SQL Server',
        value: 85
      },
      {
        name: 'Redis',
        value: 75
      }
    ]
  },
  {
    id: 4,
    title: 'Others',
    weightable: false,
    items: [
      'Code Review',
      'Unit Testing',
      'Wireframing',
      'Git',
      'SVN',
      'Data Modelling',
      'Agile',
      'Responsive Design',
      'Branching Strategy'
    ]
  }
];

export const education = [
  {
    id: 1,
    title: 'React Developer Nanodegree',
    entity: 'Udacity',
    from: '2018',
    to: 'Present'
  },
  {
    id: 2,
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