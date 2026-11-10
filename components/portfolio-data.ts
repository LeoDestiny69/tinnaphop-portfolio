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
    category: 'Professional Experience',
    period: 'September 2025 — February 2026',
    role: 'Full Stack Developer',
    company: '365 INFOTECH COMPANY LIMITED',
    detail: 'Worked on enterprise resource planning applications that support internal business operations, from responsive interfaces and backend APIs to database management and deployment.',
    overview: 'Contributed to the development and maintenance of ERP applications, collaborating with the development team to implement business requirements, operational workflows, external integrations, and reliable application functionality.',
    responsibilities: [
      'Developed and maintained ERP applications with Next.js, React.js, and TypeScript.',
      'Built responsive frontend interfaces and backend APIs for business processes.',
      'Designed and managed relational databases with PostgreSQL, Prisma ORM, and Sequelize ORM.',
      'Implemented business functionalities and operational workflows based on business requirements.',
      'Integrated external services and APIs to extend application capabilities.',
      'Managed application development environments with Docker and source code through Git.',
      'Deployed and maintained applications on AWS EC2 in collaboration with the development team.',
    ],
    contributions: [
      { label: 'Frontend Development', text: 'Developed responsive, reusable interfaces for ERP modules and business workflows using React.js, Next.js, and TypeScript.' },
      { label: 'Backend Development', text: 'Built backend APIs and application logic, connecting frontend applications with workflow services.' },
      { label: 'Database Management', text: 'Designed and managed PostgreSQL structures and worked with Prisma ORM and Sequelize ORM for data operations.' },
      { label: 'System Integration', text: 'Integrated external APIs and services, including LINE LIFF SDK where required by the application.' },
      { label: 'Development & Infrastructure', text: 'Used Docker and Git for development workflows and supported AWS EC2 application deployment and maintenance.' },
    ],
    stack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'API Development', 'PostgreSQL', 'Prisma ORM', 'Sequelize ORM', 'LINE LIFF SDK', 'Docker', 'Git', 'AWS EC2'],
  },
  { category: 'Research Experience', period: '2025', role: 'Research Assistant Intern', company: 'INECTEC — NSTDA', detail: 'Conducted deepfake detection research with TensorFlow and PyTorch, prepared image datasets, and built image preprocessing workflows with OpenCV.', overview: undefined, responsibilities: undefined, contributions: undefined, highlights: undefined, stack: undefined },
  { category: 'Education', period: '2021 — 2025', role: "Bachelor's Degree in Computer Science", company: 'Bangkok University', detail: 'GPA: 3.33', overview: undefined, responsibilities: undefined, contributions: undefined, highlights: undefined, stack: undefined },
]
