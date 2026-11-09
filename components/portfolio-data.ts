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
  { period: '2025 — Feb 2026', role: 'Full Stack Developer', company: '365 Infotech Company Limited', detail: 'Developed and maintained ERP applications, built sales and employee management features, integrated LINE LIFF, and collaborated on database design.' },
  { period: '2025', role: 'Research Assistant Intern', company: 'INECTEC — NSTDA', detail: 'Conducted deepfake detection research with TensorFlow and PyTorch, prepared image datasets, and built image preprocessing workflows with OpenCV.' },
  { period: '2021 — 2025', role: "Bachelor's Degree in Computer Science", company: 'Bangkok University', detail: 'GPA: 3.33' },
]
