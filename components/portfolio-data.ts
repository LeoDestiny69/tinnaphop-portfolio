export const profile = {
  name: 'Tinnaphop Saelim',
  role: 'Full Stack Developer',
  email: 'premier674@gmail.com',
  github: 'https://github.com/LeoDestiny69',
  linkedin: 'https://www.linkedin.com/in/tinnaphop-saelim-1a5a94326',
}

export const projects = [
  {
    number: '01',
    title: 'Northingham ERP',
    type: 'Enterprise Resource Planning System',
    overview: 'Northingham ERP is a business operations platform for sales workflows, invoicing, employee attendance, approvals, and workforce management. It brings these day-to-day processes into one internal system.',
    features: ['Sales order management', 'PDF invoice generation', 'LINE LIFF attendance', 'Employee shift management'],
    contributions: ['Implemented sales order management', 'Built PDF invoice generation', 'Integrated LINE LIFF attendance', 'Developed employee shift management'],
    description: 'Northingham ERP is a business operations platform for sales workflows, invoicing, employee attendance, approvals, and workforce management.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Sequelize', 'Docker', 'LINE LIFF'],
    accent: 'violet',
  },
  {
    number: '02',
    title: 'Vitalia ERP',
    type: 'Enterprise Application Maintenance',
    overview: 'Vitalia ERP is a full-stack ERP application maintained and improved for reliable internal business operations. The work focused on supporting an existing codebase and keeping business workflows dependable.',
    features: ['Existing ERP business workflows', 'Internal application support', 'Ongoing maintenance and troubleshooting'],
    contributions: ['Investigated and fixed bugs', 'Maintained the existing codebase', 'Supported application issues', 'Collaborated on team troubleshooting'],
    description: 'Vitalia ERP is a full-stack ERP application maintained and improved for reliable internal business operations.',
    stack: ['React.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    accent: 'blue',
  },
]

export const skillGroups = [
  { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'Django'] },
  { label: 'Database & ORM', items: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Sequelize ORM', 'SQL'] },
  { label: 'Tools & AI', items: ['Docker', 'Git', 'AWS EC2', 'Python', 'TensorFlow', 'PyTorch', 'OpenCV'] },
]

export const experience = [
  {
    period: 'September 2025 — February 2026',
    role: 'Full Stack Developer',
    company: '365 INFOTECH COMPANY LIMITED',
    detail: 'Worked on enterprise resource planning applications that support internal business operations, from responsive interfaces and backend APIs to database management and deployment.',
    overview: 'Contributed to the development and maintenance of ERP applications, collaborating with the development team to implement business requirements, operational workflows, external integrations, and reliable application functionality.',
    responsibilities: [
      'Developed and maintained ERP applications with Next.js, React.js, and TypeScript.',
      'Built responsive frontend interfaces and backend APIs for business processes.',
      'Designed and managed relational databases with PostgreSQL, Prisma ORM, and Sequelize ORM.',
      'Implemented approval workflows, employee attendance management, and operational reporting.',
      'Integrated external services including LINE LIFF SDK for mobile attendance and reporting.',
      'Containerized applications with Docker, managed source code with Git, and supported AWS EC2 deployments.',
    ],
    contributions: [
      { label: 'Frontend Development', text: 'Developed responsive, reusable interfaces for ERP modules and business workflows using React.js, Next.js, and TypeScript.' },
      { label: 'Backend Development', text: 'Built backend APIs and application logic, connecting frontend applications with workflow services.' },
      { label: 'Database Management', text: 'Designed and managed PostgreSQL structures and worked with Prisma ORM and Sequelize ORM for data operations.' },
      { label: 'System Integration & Deployment', text: 'Integrated LINE LIFF SDK, standardized environments with Docker, managed Git workflows, and supported AWS EC2 deployment and maintenance.' },
    ],
    highlights: [
      { title: 'Northingham ERP', overview: 'An enterprise ERP application supporting internal business operations and workforce management.', contributions: ['Business workflow functionalities and approval processes', 'Employee attendance management', 'Mobile attendance and reporting capabilities', 'LINE LIFF SDK integration', 'Frontend and backend development'] },
      { title: 'Vitalia ERP', overview: 'An enterprise ERP application involving application development and maintenance.', contributions: ['Frontend and backend application development', 'Database-related operations and application data management', 'System maintenance and debugging', 'Improvements to existing application functionality'] },
    ],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'API Development', 'PostgreSQL', 'Prisma ORM', 'Sequelize ORM', 'LINE LIFF SDK', 'Docker', 'Git', 'AWS EC2'],
  },
  { period: '2025', role: 'Research Assistant Intern', company: 'INECTEC — NSTDA', detail: 'Conducted deepfake detection research with TensorFlow and PyTorch, prepared image datasets, and built image preprocessing workflows with OpenCV.', overview: undefined, responsibilities: undefined, contributions: undefined, highlights: undefined, stack: undefined },
  { period: '2021 — 2025', role: "Bachelor's Degree in Computer Science", company: 'Bangkok University', detail: 'GPA: 3.33', overview: undefined, responsibilities: undefined, contributions: undefined, highlights: undefined, stack: undefined },
]
