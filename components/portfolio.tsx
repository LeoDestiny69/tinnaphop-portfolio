'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Code2, Link2, Mail, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { experience, profile, projects, skillGroups } from './portfolio-data'

const navigation = [
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'About', id: 'about' },
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

  const handleCardMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
      <main className="min-h-screen overflow-x-clip bg-[#08090d] text-[#f4f2ed] selection:bg-violet-500/30 selection:text-white dark:bg-[#08090d] dark:text-[#f4f2ed] light:bg-[#f5f7fb] light:text-[#15161a]">
        <div className="ambient-glow pointer-events-none fixed inset-0 -z-0 opacity-80 [background-image:radial-gradient(circle_at_15%_5%,rgba(99,70,180,.18),transparent_27%),radial-gradient(circle_at_85%_30%,rgba(35,93,173,.13),transparent_25%)]" />
        <header className={`sticky top-0 z-50 border-b transition-[height,background-color,backdrop-filter,box-shadow] duration-500 ${scrolled ? 'h-14 border-white/15 bg-[#08090d]/75 shadow-lg shadow-black/10 backdrop-blur-2xl' : 'h-18 border-white/[.08] bg-[#08090d]/80 backdrop-blur-xl'} light:border-slate-900/10 light:bg-[#f5f7fb]/80`}>
          <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Go to top">
              <span className="grid size-8 place-items-center rounded-lg bg-white text-sm font-black text-[#111217]">TS</span><span className="hidden sm:inline">Tinnaphop<span className="text-violet-400">.</span></span>
            </a>
            <nav className="hidden items-center gap-7 text-base text-white/65 md:flex" aria-label="Primary navigation">
              {navigation.map((item) => <a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-white">{item.label}</a>)}
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={() => setLight(!light)} aria-label="Toggle color theme" className="grid size-9 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white light:border-slate-900/15 light:text-slate-600">{light ? <Moon size={16} /> : <Sun size={16} />}</button>
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="grid size-9 place-items-center rounded-full border border-white/10 md:hidden">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
            </div>
          </div>
          {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/[.08] px-5 py-5 text-sm text-white/70 md:hidden" aria-label="Mobile navigation">{navigation.map((item) => <a key={item.id} onClick={() => setMenuOpen(false)} href={`#${item.id}`}>{item.label}</a>)}</nav>}
        </header>

        <div id="top" className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 sm:px-8">
          <section id="hero" className="order-1 grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 md:grid-cols-[1.15fr_.85fr] md:py-20">
            <div>
              <div className="hero-enter hero-enter-1 mb-7 flex items-center gap-3 text-sm text-violet-300"><span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" /> Available for new opportunities</div>
              <p className="hero-enter hero-enter-2 mb-4 text-sm font-medium tracking-[.2em] text-white/40">HELLO, I&apos;M</p>
              <h1 className="hero-enter hero-enter-3 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">Tinnaphop<br /><span className="bg-gradient-to-r from-violet-300 via-indigo-200 to-blue-300 bg-clip-text text-transparent">Saelim<span className="text-violet-400">.</span></span></h1>
              <p className="hero-enter hero-enter-4 mt-8 max-w-xl text-xl leading-relaxed text-white/65">Full Stack Developer building reliable web applications that turn complex business workflows into simple experiences.</p>
              <div className="hero-enter hero-enter-5 mt-9 flex flex-wrap gap-3"><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#101117] transition hover:bg-violet-100">View projects <ArrowUpRight size={16} /></a><a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:text-white"><Link2 size={16} /> GitHub</a></div>
              <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/40"><span>React.js</span><span>Next.js</span><span>TypeScript</span><span>Node.js</span><span>PostgreSQL</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-sm md:justify-self-end"><div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" /><div className="relative rounded-[2rem] border border-white/10 bg-white/[.035] p-4 shadow-2xl shadow-violet-950/30"><div className="rounded-[1.35rem] border border-white/10 bg-[#101118] p-6"><div className="mb-16 flex items-center justify-between text-xs text-white/35"><span>tinnaphop.tsx</span><Code2 size={15} /></div><div className="typewriter-code space-y-3 font-mono text-sm"><p className="text-violet-300"><span className="text-white/30">01</span> const developer = {'{'}</p><p className="pl-5 text-blue-300"><span className="text-white/30">02</span> name: <span className="text-emerald-300">&quot;Tinnaphop&quot;</span>,</p><p className="pl-5 text-blue-300"><span className="text-white/30">03</span> focus: <span className="text-emerald-300">&quot;full-stack&quot;</span>,</p><p className="pl-5 text-blue-300"><span className="text-white/30">04</span> passion: <span className="text-emerald-300">&quot;solving problems&quot;</span></p><p className="text-violet-300"><span className="text-white/30">05</span> {'}'}</p></div><div className="mt-14 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/45"><Sparkles size={14} className="text-violet-300" /> clean code, thoughtful products</div></div></div></div>
          </section>

          <section id="about" className="order-5 border-t border-white/[.08] py-16 md:py-20"><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div data-reveal><SectionLabel sectionId="about" label="About me" /></div><div><h2 data-reveal className="max-w-2xl text-3xl font-medium leading-tight tracking-[-.035em] sm:text-5xl">I enjoy making complex systems feel <span className="text-white/40">simple and useful.</span></h2><p data-reveal className="mt-7 max-w-2xl text-base leading-8 text-white/55">I&apos;m a Full Stack Developer with hands-on experience building and maintaining enterprise web applications, especially ERP systems. I enjoy solving technical problems, collaborating with teams, and creating software that supports real-world business operations.</p><div data-reveal className="mt-9 grid gap-6 text-sm text-white/55 sm:grid-cols-2"><div className="flex gap-3"><Check className="mt-1 shrink-0 text-violet-300" size={16} /><span>Business applications & ERP workflows</span></div><div className="flex gap-3"><Check className="mt-1 shrink-0 text-violet-300" size={16} /><span>Thoughtful interfaces and maintainable code</span></div></div></div></div></section>

          <section id="projects" className="order-3 border-t border-white/[.08] py-16 md:py-20"><SectionLabel sectionId="projects" label="Selected projects" /><div className="mt-12 grid gap-5 lg:grid-cols-2">{projects.map((project) => <article data-reveal onMouseMove={handleCardMove} key={project.title} className="project-card group overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] transition duration-300 hover:-translate-y-1 hover:border-violet-300/30"><div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent === 'violet' ? 'from-violet-950/80 via-[#151323] to-[#0d1018]' : 'from-blue-950/70 via-[#101621] to-[#0d1018]'}`}><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:32px_32px]" /><div className="absolute bottom-5 left-6 text-6xl font-semibold tracking-[-.08em] text-white/10">{project.number}</div><div className="absolute right-6 top-6 rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs text-white/60">Case study</div></div><div className="p-6 sm:p-8"><div><p className="text-sm uppercase tracking-[.18em] text-violet-300">{project.type}</p><h3 className="mt-2 text-3xl font-medium tracking-tight">{project.title}</h3></div><div className="mt-6 grid gap-6 text-base leading-7 text-white/65"><div><p className="mb-2 text-sm font-medium uppercase tracking-[.14em] text-white/45">Project overview</p><p>{project.overview}</p></div><div><p className="mb-2 text-sm font-medium uppercase tracking-[.14em] text-white/45">Key workflows</p><ul className="grid gap-2">{project.features.map((item) => <li key={item} className="flex gap-2"><span className="mt-3 size-1 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul></div><div><p className="mb-2 text-sm font-medium uppercase tracking-[.14em] text-white/45">My contributions</p><ul className="grid gap-2">{project.contributions.map((item) => <li key={item} className="flex gap-2"><span className="mt-3 size-1 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul></div></div><div className="mt-7"><p className="mb-3 text-sm font-medium uppercase tracking-[.14em] text-white/45">Technology stack</p><div className="flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60">{tag}</span>)}</div></div></div></article>)}</div></section>

          <section id="skills" className="order-4 border-t border-white/[.08] py-16 md:py-20"><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]"><SectionLabel sectionId="skills" label="Technical skills" /><div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">{skillGroups.map((group) => <div data-reveal key={group.label}><h3 className="mb-4 text-sm font-medium text-white/45">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg bg-white/[.06] px-3 py-2 text-sm text-white/75">{item}</span>)}</div></div>)}</div></div></section>

          <section id="experience" className="order-2 border-t border-white/[.08] py-16 md:py-20"><div data-reveal><SectionLabel sectionId="experience" label="Professional experience" /></div><div className="mt-10 grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div className="timeline-track ml-2 border-l border-white/10 pl-8">{experience.map((item) => <div data-reveal key={item.company} className="relative pb-10 last:pb-0"><span data-reveal className="timeline-node absolute -left-[37px] top-1 size-2 rounded-full bg-violet-300 ring-8 ring-[#08090d]" /><p className="text-xs uppercase tracking-[.16em] text-violet-300">{item.period}</p><h3 className="mt-3 text-xl font-medium">{item.role}</h3><p className="mt-1 text-sm text-white/45">{item.company}</p><p className="mt-4 max-w-xl leading-7 text-white/55">{item.detail}</p></div>)}</div><div className="min-w-0">{experience[0].overview && <><h2 data-reveal className="text-3xl font-medium tracking-[-.035em] sm:text-4xl">Where I&apos;ve Worked</h2><p data-reveal className="mt-5 max-w-3xl text-base leading-8 text-white/60">{experience[0].overview}</p><div data-reveal className="mt-9"><p className="mb-4 text-sm font-medium uppercase tracking-[.14em] text-white/45">Key responsibilities</p><ul className="grid gap-3 text-sm leading-7 text-white/60">{experience[0].responsibilities?.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul></div><div data-reveal className="mt-10"><p className="mb-4 text-sm font-medium uppercase tracking-[.14em] text-white/45">Technical contributions</p><div className="grid gap-4 sm:grid-cols-2">{experience[0].contributions?.map((item) => <div key={item.label} className="rounded-xl border border-white/10 bg-white/[.025] p-4"><h3 className="text-sm font-medium text-violet-200">{item.label}</h3><p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p></div>)}</div></div><div data-reveal className="mt-10"><p className="mb-4 text-sm font-medium uppercase tracking-[.14em] text-white/45">Selected project highlights</p><div className="grid gap-4 sm:grid-cols-2">{experience[0].highlights?.map((project) => <div key={project.title} className="rounded-xl border border-violet-300/15 bg-violet-950/10 p-5"><h3 className="text-lg font-medium">{project.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{project.overview}</p><ul className="mt-4 grid gap-2 text-xs leading-5 text-white/55">{project.contributions.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-violet-300" />{item}</li>)}</ul></div>)}</div></div><div data-reveal className="mt-10"><p className="mb-4 text-sm font-medium uppercase tracking-[.14em] text-white/45">Technology stack</p><div className="flex flex-wrap gap-2">{experience[0].stack?.map((item) => <span key={item} className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-xs text-white/70">{item}</span>)}</div></div></>}</div></div></section>

          <section id="contact" className="order-6 border-t border-white/[.08] py-16 md:py-20"><div className="rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-950/30 to-blue-950/10 p-8 sm:p-12"><div className="max-w-2xl"><SectionLabel sectionId="contact" label="Get in touch" /><h2 className="mt-8 text-4xl font-medium tracking-[-.04em] sm:text-6xl">Let&apos;s build something <span className="text-white/40">useful.</span></h2><p className="mt-6 leading-7 text-white/55">Have a project, opportunity, or just want to talk tech? I&apos;d love to hear from you.</p><div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#101117]"><Mail size={16} /> Email me</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80"><Link2 size={16} /> LinkedIn</a></div></div></div></section>
          <footer className="flex flex-col gap-4 border-t border-white/[.08] py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Tinnaphop Saelim</span><div className="flex items-center gap-4"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Link2 size={16} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link2 size={16} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /></a></div></footer>
        </div>
      </main>
    </div>
  )
}

function SectionLabel({ sectionId, label }: { sectionId: string; label: string }) { return <div className="flex items-center gap-3 text-xs uppercase tracking-[.2em] text-violet-300"><span>{sectionNumber(sectionId)}</span><span className="h-px w-8 bg-violet-300/50" /><span>{label}</span></div> }
