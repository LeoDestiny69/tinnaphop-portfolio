'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Building2, Code2, Link2, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { experience, profile, projects, skillGroups } from './portfolio-data'

const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
] as const

const sectionOrder = ['hero', ...navigation.map((item) => item.id)] as const

function sectionNumber(sectionId: string) {
  const index = sectionOrder.indexOf(sectionId as (typeof sectionOrder)[number])
  return index >= 0 ? String(index + 1).padStart(2, '0') : '00'
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [light, setLight] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = light ? 'light' : 'dark'

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')
    if (storedTheme === 'light') setLight(true)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 110)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 })
    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    revealTargets.forEach((element) => {
      element.classList.add('scroll-reveal')
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        element.classList.add('is-revealed')
      } else {
        observer.observe(element)
      }
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className={theme}>
      <main className="relative isolate min-h-screen overflow-x-clip bg-[#08090d] text-[#f4f2ed] selection:bg-violet-500/30 selection:text-white dark:bg-[#08090d] dark:text-[#f4f2ed] light:bg-[#f5f7fb] light:text-[#15161a]">
        <div className="ambient-glow pointer-events-none absolute inset-x-0 top-0 z-0 h-[100svh] opacity-70 [background-image:radial-gradient(ellipse_at_18%_12%,rgba(99,70,180,.18),transparent_42%),radial-gradient(ellipse_at_84%_38%,rgba(35,93,173,.12),transparent_38%)]" />
        <header inert={!scrolled} className={`sticky top-0 z-50 border-b transition-[height,transform,opacity,background-color,backdrop-filter,box-shadow] duration-300 ${scrolled ? 'h-14 translate-y-0 border-white/15 bg-[#08090d]/75 opacity-100 shadow-md shadow-black/10 backdrop-blur-md' : 'h-14 -translate-y-full border-white/[.08] bg-[#08090d]/80 opacity-0 pointer-events-none backdrop-blur-sm'} light:border-slate-900/10 light:bg-[#f5f7fb]/80`}>
          <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Go to top">
              <span className="grid size-8 place-items-center rounded-lg bg-white text-sm font-black text-[#111217]">TS</span><span className="hidden sm:inline">Tinnaphop<span className="text-violet-400">.</span></span>
            </a>
            <nav className="hidden items-center gap-7 text-base text-white/65 md:flex" aria-label="Primary navigation">
              {navigation.map((item) => <a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-white">{item.label}</a>)}
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={() => setLight(!light)} aria-label={`Switch to ${light ? 'dark' : 'light'} theme`} aria-pressed={light} className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white light:border-slate-900/15 light:text-slate-600">{light ? <Moon size={16} /> : <Sun size={16} />}</button>
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" className="grid size-9 place-items-center rounded-full border border-white/10 md:hidden">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
            </div>
          </div>
          {menuOpen && <nav id="mobile-navigation" className="flex flex-col gap-5 border-t border-white/[.08] px-5 py-5 text-sm text-white/70 md:hidden" aria-label="Mobile navigation">{navigation.map((item) => <a key={item.id} onClick={() => setMenuOpen(false)} href={`#${item.id}`}>{item.label}</a>)}</nav>}
        </header>

        <div id="top" className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 sm:px-8">
          <section id="hero" className="hero-section relative order-1 grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 md:grid-cols-[1.15fr_.85fr] md:py-20">
            <div>
              <div className="hero-enter hero-enter-1 mb-7 flex items-center gap-3 text-sm text-violet-300"><span className="size-2 rounded-full bg-emerald-400" /> Available for new opportunities</div>
              <p className="hero-enter hero-enter-2 mb-4 text-sm font-medium tracking-[.2em] text-white/55">HELLO, I&apos;M</p>
              <h1 className="hero-enter hero-enter-3 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">Tinnaphop<br /><span className="bg-gradient-to-r from-violet-300 via-indigo-200 to-blue-300 bg-clip-text text-transparent">Saelim<span className="text-violet-400">.</span></span></h1>
              <p className="hero-enter hero-enter-4 mt-8 max-w-xl text-xl leading-relaxed text-white/65">Full Stack Developer building reliable web applications that turn complex business workflows into simple experiences.</p>
              <div className="hero-enter hero-enter-5 mt-9 flex flex-wrap gap-3"><a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:text-white"><Link2 size={16} /> GitHub</a></div>
              <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/55"><span>React.js</span><span>Next.js</span><span>TypeScript</span><span>Node.js</span><span>PostgreSQL</span></div><a href="#about" className="hero-scroll-cue group absolute bottom-7 left-0 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-white/60 transition hover:text-violet-200"><span>Scroll to explore</span><span className="grid size-7 place-items-center rounded-full border border-white/15 transition group-hover:border-violet-300/50"><span className="hero-scroll-arrow">↓</span></span></a>
            </div>
            <div className="relative mx-auto w-full max-w-sm md:justify-self-end"><div className="relative rounded-[2rem] border border-white/10 bg-white/[.035] p-4"><div className="rounded-[1.35rem] border border-white/10 bg-[#101118] p-6"><div className="mb-16 flex items-center justify-between text-xs text-white/55"><span>tinnaphop.tsx</span><Code2 size={15} /></div><div className="typewriter-code space-y-3 font-mono text-sm"><p className="text-violet-300"><span className="text-white/50">01</span> const developer = {'{'}</p><p className="pl-5 text-blue-300"><span className="text-white/50">02</span> name: <span className="text-emerald-300">&quot;Tinnaphop&quot;</span>,</p><p className="pl-5 text-blue-300"><span className="text-white/50">03</span> focus: <span className="text-emerald-300">&quot;full-stack&quot;</span>,</p><p className="pl-5 text-blue-300"><span className="text-white/50">04</span> passion: <span className="text-emerald-300">&quot;solving problems&quot;</span></p><p className="text-violet-300"><span className="text-white/50">05</span> {'}'}<span className="code-cursor" aria-hidden="true">▋</span></p></div><div className="mt-14 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/60">clean code, thoughtful products</div></div></div></div>
          </section>

          <AboutSection />
          {false && (<section id="about" className="order-2 border-t border-white/[.08] py-16 md:py-20"><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div data-reveal><SectionLabel sectionId="about" label="ABOUT ME" /></div><div><h2 data-reveal className="max-w-2xl text-3xl font-medium leading-tight tracking-[-.035em] sm:text-5xl">Beyond Writing Code.</h2><p data-reveal className="mt-4 max-w-2xl text-lg leading-8 text-violet-200/80">A little more about the developer behind the projects.</p><p data-reveal className="mt-5 max-w-2xl text-lg leading-8 text-white/65">I&apos;m a Full Stack Developer with a background in Computer Science and hands-on experience building enterprise applications. I enjoy turning business requirements into practical software solutions, working across frontend, backend, and database development.</p><div data-reveal className="mt-10 grid gap-8 sm:grid-cols-2"><EducationCard /><div><p className="text-sm font-semibold uppercase tracking-[.14em] text-violet-200">What I Enjoy Building</p><p className="mt-3 text-base leading-7 text-white/60">I&apos;m particularly interested in developing business applications, ERP systems, and tools that simplify complex workflows. I enjoy understanding how systems work together and translating real-world requirements into functional, reliable applications.</p></div><div><p className="text-sm font-semibold uppercase tracking-[.14em] text-violet-200">How I Approach Development</p><p className="mt-3 text-base leading-7 text-white/60">I value clean, maintainable code, thoughtful problem-solving, and continuous learning. I aim to build software that is not only functional but also practical and easy to maintain.</p></div><div className="flex flex-wrap gap-2 sm:col-span-2"><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">Problem Solving</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">Full Stack Development</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">System Thinking</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">Continuous Learning</span></div></div></div></div></section>)}

          <section id="projects" className="order-4 border-t border-white/[.08] py-16 md:py-20"><SectionLabel sectionId="projects" label="Selected projects" /><div className="mt-12 grid gap-5 lg:grid-cols-2">{projects.map((project) => <article data-reveal key={project.title} className="project-card group overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] transition duration-300 hover:-translate-y-1 hover:border-violet-300/30"><div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent === 'violet' ? 'from-violet-950/80 via-[#151323] to-[#0d1018]' : 'from-blue-950/70 via-[#101621] to-[#0d1018]'}`}><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:32px_32px]" /><div className="absolute bottom-5 left-6 text-6xl font-semibold tracking-[-.08em] text-white/10">{project.number}</div><div className="absolute right-6 top-6 rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs text-white/60">Case study</div></div><div className="p-6 sm:p-8"><div><p className="text-sm uppercase tracking-[.18em] text-violet-300">{project.type}</p><h3 className="mt-2 text-3xl font-medium tracking-tight">{project.title}</h3><div className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-violet-200"><Building2 aria-hidden="true" className="size-3.5" />Enterprise project at 365 Infotech</div></div><div className="mt-6 grid gap-6 text-base leading-7 text-white/65"><div><p className="mb-2 text-sm font-medium uppercase tracking-[.14em] text-white/60">Project overview</p><p>{project.overview}</p></div><div><p className="mb-2 text-sm font-medium uppercase tracking-[.14em] text-white/60">Key workflows</p><ul className="grid gap-2">{project.features.map((item) => <li key={item} className="flex gap-2"><span className="mt-3 size-1 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul></div><div><p className="mb-2 text-sm font-medium uppercase tracking-[.14em] text-white/60">My contributions</p><ul className="grid gap-2">{project.contributions.map((item) => <li key={item} className="flex gap-2"><span className="mt-3 size-1 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul></div></div><div className="mt-7"><p className="mb-3 text-sm font-medium uppercase tracking-[.14em] text-white/60">Technology stack</p><div className="flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60">{tag}</span>)}</div></div></div></article>)}</div></section>

          <section id="skills" className="order-5 border-t border-white/[.08] py-16 md:py-20"><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]"><SectionLabel sectionId="skills" label="Technical skills" /><div className="skill-showcase grid gap-5 sm:grid-cols-2">{skillGroups.map((group) => <div data-reveal key={group.label} className="skill-group rounded-2xl border border-white/10 bg-white/[.025] p-5 transition duration-300"><h3 className="mb-4 text-base font-semibold uppercase tracking-[.12em] text-violet-200">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg bg-white/[.06] px-3 py-2 text-sm text-white/75">{item}</span>)}</div></div>)}</div></div></section>

          <FeaturedExperience />
          {false && (<section id="experience" className="order-2 border-t border-white/[.08] py-16 md:py-20"><div data-reveal><SectionLabel sectionId="experience" label="Professional experience" /></div><div className="mt-10 grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div className="timeline-track ml-2 border-l border-white/10 pl-8">{experience.map((item) => <div data-reveal key={item.company} className="relative pb-10 last:pb-0"><span data-reveal className="timeline-node absolute -left-[37px] top-1 size-2 rounded-full bg-violet-300 ring-8 ring-[#08090d]" /><p className="text-xs uppercase tracking-[.16em] text-violet-300"><span className="mr-3 text-[10px] tracking-[.18em] text-violet-200/70">{item.category}</span>{item.period}</p><h3 className="mt-3 text-xl font-medium">{item.role}</h3><p className="mt-1 text-sm text-white/60">{item.company}</p><p className="mt-4 max-w-xl leading-7 text-white/55">{item.detail}</p></div>)}</div><div className="min-w-0">{experience[0].overview && <><h2 data-reveal className="text-3xl font-medium tracking-[-.035em] sm:text-4xl">Where I&apos;ve Worked</h2><p data-reveal className="mt-3 text-base text-violet-200/80">My professional journey and technical contributions.</p><p data-reveal className="mt-5 max-w-3xl text-base leading-8 text-white/60">{experience[0].overview}</p><div data-reveal className="mt-9"><p className="mb-4 text-sm font-medium uppercase tracking-[.14em] text-white/60">Key responsibilities</p><ul className="grid gap-3 text-sm leading-7 text-white/60">{experience[0].responsibilities?.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul></div><div data-reveal className="mt-10"><p className="mb-4 text-sm font-medium uppercase tracking-[.14em] text-white/60">Technical contributions</p><div className="grid gap-4 sm:grid-cols-2">{experience[0].contributions?.map((item) => <div key={item.label} className="rounded-xl border border-white/10 bg-white/[.025] p-4"><h3 className="text-sm font-medium text-violet-200">{item.label}</h3><p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p></div>)}</div></div></>}</div></div></section>)}

          <section id="contact" className="order-6 border-t border-white/[.08] py-16 md:py-20"><div className="rounded-2xl border border-violet-300/20 bg-[#101118] p-8 sm:p-12"><div className="max-w-2xl"><SectionLabel sectionId="contact" label="Get in touch" /><h2 className="mt-8 text-4xl font-medium tracking-[-.04em] sm:text-6xl">Let&apos;s build something <span className="text-white/55">useful.</span></h2><p className="mt-6 leading-7 text-white/55">Have a project, opportunity, or just want to talk tech? I&apos;d love to hear from you.</p><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#101117]"><Mail size={16} /> Email me</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80"><Link2 size={16} /> LinkedIn</a></div></div></div></section>
          <footer className="order-7 flex flex-col gap-4 border-t border-white/[.08] py-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Tinnaphop Saelim</span><div className="flex items-center gap-4"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Link2 size={16} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link2 size={16} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /></a></div></footer>
        </div>
      </main>
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="order-2 border-t border-white/[.08] py-16 md:py-20">
      <div className="w-full">
        <div data-reveal>
          <SectionLabel sectionId="about" label="ABOUT ME" />
          <h2 data-reveal className="mt-8 max-w-2xl font-medium leading-[1.12] tracking-[-.045em] text-[clamp(3.625rem,5vw,4rem)]">Beyond Writing Code.</h2>
<p data-reveal className="mt-4 max-w-2xl leading-[1.7] text-[clamp(1.3125rem,2vw,1.4375rem)] text-violet-200/80">A little more about the developer behind the projects.</p>
          <p data-reveal className="mt-8 font-semibold uppercase tracking-[.12em] text-[clamp(1.1875rem,1.7vw,1.25rem)] text-violet-200">Who I Am</p><p data-reveal className="mt-3 max-w-3xl text-lg leading-8 text-white/65">I&apos;m a Full Stack Developer with a background in Computer Science and hands-on experience building enterprise applications. I enjoy turning business requirements into practical software solutions, working across frontend, backend, and database development.</p>
          <EducationCard />
          <div data-reveal className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div><p className="font-semibold uppercase tracking-[.12em] text-[clamp(1.25rem,1.8vw,1.375rem)] text-violet-200">What I Enjoy Building</p><p className="mt-3 max-w-xl leading-[1.65] text-[clamp(1.125rem,1.5vw,1.1875rem)] text-white/60">I&apos;m particularly interested in developing business applications, ERP systems, and tools that simplify complex workflows. I enjoy understanding how systems work together and translating real-world requirements into functional, reliable applications.</p></div>
            <div><p className="font-semibold uppercase tracking-[.12em] text-[clamp(1.25rem,1.8vw,1.375rem)] text-violet-200">How I Approach Development</p><p className="mt-3 max-w-xl leading-[1.65] text-[clamp(1.125rem,1.5vw,1.1875rem)] text-white/60">I value clean, maintainable code and practical problem-solving. I enjoy building applications that support real business operations and turn complex requirements into reliable software.</p></div>
            <div className="flex flex-wrap gap-2 sm:col-span-2"><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">Problem Solving</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">Full Stack Development</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">System Thinking</span><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-2 text-sm text-white/70">Continuous Learning</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationCard() {
  const education = experience[2]

  return (
    <article data-reveal className="academic-card mt-12 rounded-2xl border border-white/10 bg-[#101118] p-6 sm:p-8">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex min-w-0 flex-1 items-center gap-4"><div className="grid size-16 shrink-0 place-items-center rounded-xl border border-violet-300/25 bg-white/90 p-2 shadow-lg shadow-violet-950/10"><Image src="https://contents.bu.ac.th/contents/dist/images/bu_logo.svg" alt="Bangkok University logo" width={172} height={48} style={{ width: 'auto', height: 'auto' }} className="max-h-12 max-w-12 object-contain" /></div><div><p className="text-sm font-semibold uppercase tracking-[.14em] text-violet-200">Academic Background</p><h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">{education.role}</h3><p className="mt-1 text-base text-white/65">{education.company}</p></div></div>
        <div className="grid w-full shrink-0 grid-cols-3 gap-3 border-t border-white/10 pt-5 lg:w-auto lg:min-w-[28rem] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><div><p className="text-sm font-semibold uppercase tracking-[.12em] text-white/60">Period</p><p className="mt-2 text-lg font-semibold text-white">{education.period}</p></div><div><p className="text-sm font-semibold uppercase tracking-[.12em] text-violet-200">GPA</p><p className="mt-2 text-2xl font-semibold leading-none text-white">3.33</p></div><div><p className="text-sm font-semibold uppercase tracking-[.12em] text-amber-200">Honors</p><p className="mt-2 text-lg font-semibold leading-6 text-white">Second-Class Honors</p></div></div>
      </div>
    </article>
  )
}

function FeaturedExperience() {
  const primary = experience[0]
  const research = experience[1]

  return (
    <section id="experience" className="order-3 border-t border-white/[.08] py-16 md:py-20">
      <div data-reveal>
        <SectionLabel sectionId="experience" label="Professional experience" />
        <h2 data-reveal className="mt-8 max-w-3xl text-4xl font-medium tracking-[-.045em] sm:text-6xl">Experience &amp; Background</h2>
        <p data-reveal className="mt-5 text-base text-violet-200/80">My professional journey and technical background.</p>
      </div>

      <article data-reveal className="experience-feature mt-10 rounded-2xl border border-white/10 bg-[#101118] p-6 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 pb-7">
          <div>
            <span className="inline-flex rounded-full border border-violet-300/35 bg-violet-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[.16em] text-violet-200">Primary experience</span>
            <h3 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">{primary.role}</h3>
            <div className="mt-4 inline-flex flex-wrap items-center gap-3"><span className="rounded-full border border-violet-300/35 bg-violet-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.2em] text-violet-200">Primary employer</span><p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{primary.company}</p></div>
          </div>
          <p className="text-sm uppercase tracking-[.14em] text-white/50">{primary.period}</p>
        </div>
        <div className="mt-8 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[.14em] text-white/60">Employment overview</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/65">{primary.overview}</p><div className="mt-8 rounded-2xl border border-violet-300/20 bg-violet-300/[.06] p-5"><p className="text-xs font-semibold uppercase tracking-[.18em] text-violet-200">Featured projects at 365 Infotech</p><div className="mt-4 grid gap-3 sm:grid-cols-2"><span className="rounded-xl border border-violet-300/25 bg-black/15 px-4 py-3 text-sm font-semibold text-white">Northingham ERP</span><span className="rounded-xl border border-violet-300/25 bg-black/15 px-4 py-3 text-sm font-semibold text-white">Vitalia ERP</span></div><p className="mt-4 text-sm leading-6 text-white/60">Contributed to both enterprise ERP projects as part of the development team at 365 Infotech.</p></div>
            <div className="mt-8">
              <p className="text-sm font-medium uppercase tracking-[.14em] text-white/60">Key responsibilities</p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-white/65">{primary.responsibilities?.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[.14em] text-white/60">Technical contributions</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">{primary.contributions?.map((item) => <div key={item.label} className="rounded-xl border border-white/10 bg-black/10 p-4"><p className="text-sm font-medium text-violet-200">{item.label}</p><p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p></div>)}</div>
          </div>
        </div>
      </article>

      <div data-reveal className="mt-14">
        <p className="text-sm font-medium uppercase tracking-[.18em] text-white/60">Additional background</p>
        <div className="mt-5 w-full">
          {[research].map((item) => <article key={item.company} className="research-card min-h-[18rem] w-full rounded-2xl border border-white/10 bg-[#101118] p-8 sm:p-9"><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><span className="text-sm font-semibold uppercase tracking-[.16em] text-violet-300">{item.category}</span><h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{item.role}</h3><p className="mt-2 text-base font-medium text-white/55">{item.company}</p><p className="mt-3 text-base font-semibold uppercase tracking-[.12em] text-white/60">{item.period}</p><p className="mt-8 text-sm font-semibold uppercase tracking-[.14em] text-white/60">Deepfake Detection Research</p></div><div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><p className="text-sm font-semibold uppercase tracking-[.14em] text-violet-200">Research Focus</p><p className="mt-3 text-lg leading-8 text-white/70">Deepfake detection research, image dataset preparation, and image preprocessing workflows.</p><p className="mt-7 text-sm font-semibold uppercase tracking-[.14em] text-white/60">Technologies</p><div className="mt-4 flex flex-wrap gap-2">{item.technologies?.map((technology) => <span key={technology} className="rounded-full border border-violet-300/30 bg-violet-300/12 px-3.5 py-2 text-sm font-medium text-violet-100">{technology}</span>)}</div></div></div></article>)}
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ sectionId, label }: { sectionId: string; label: string }) { return <div className="section-label flex items-center gap-3 font-semibold uppercase tracking-[.16em] text-violet-300"><span>{sectionNumber(sectionId)}</span><span className="h-px w-8 bg-violet-300/50" /><span>{label}</span></div> }
