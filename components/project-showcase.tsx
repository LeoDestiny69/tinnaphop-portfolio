'use client'

import {
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  Search,
  Users,
} from 'lucide-react'

type ProjectShowcaseProps = {
  variant: 'northingham' | 'vitalia'
  number: string
}

const navigation = [LayoutDashboard, FileText, Users, ClipboardCheck]
const workflow = ['Request', 'Review', 'Approval', 'Complete']

export function ProjectShowcase({ variant, number }: ProjectShowcaseProps) {
  const isNorthingham = variant === 'northingham'

  return (
    <div
      className={`project-showcase relative isolate h-[22rem] overflow-hidden border-b border-white/10 p-3 sm:h-[20rem] sm:p-4 ${isNorthingham ? 'project-showcase-violet' : 'project-showcase-blue'}`}
    >
      <div className="project-showcase-grid pointer-events-none absolute inset-0" />
      <div
        role="img"
        aria-label={`${isNorthingham ? 'Northingham' : 'Vitalia'} ERP illustrative interface mockup, using fictional demonstration data and not depicting the production application`}
        className="project-showcase-window relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c0e14]/95 shadow-xl shadow-black/20"
      >
        <div className="flex h-8 shrink-0 items-center justify-between gap-3 border-b border-white/[.08] bg-[#101219] px-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex gap-1" aria-hidden="true">
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="size-1.5 rounded-full bg-white/20" />
              <span className="size-1.5 rounded-full bg-white/20" />
            </div>
            <span className="truncate text-[9px] font-medium text-white/55">
              {isNorthingham ? 'Northingham ERP' : 'Vitalia ERP'}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-[8px] font-medium uppercase tracking-[.12em] text-white/45">{number}</span>
            <span className="rounded-full border border-white/10 bg-white/[.04] px-2 py-0.5 text-[7px] font-medium uppercase tracking-[.1em] text-white/55">
              Illustrative · fictional data
            </span>
          </div>
        </div>

        {isNorthingham ? <NorthinghamDashboard /> : <VitaliaDashboard />}
      </div>
    </div>
  )
}

function Sidebar({ title }: { title: string }) {
  return (
    <aside className="flex w-9 shrink-0 flex-col border-r border-white/[.07] bg-[#101219] px-1.5 py-2 sm:w-[7.25rem] sm:px-2.5">
      <div className="mb-3 flex items-center justify-center gap-2 px-1 sm:justify-start">
        <span className="size-5 shrink-0 rounded-md border border-[var(--project-accent)]/30 bg-[var(--project-accent)]/15" />
        <span className="hidden truncate text-[8px] font-semibold tracking-wide text-white/65 sm:block">{title}</span>
      </div>
      <p className="mb-1 hidden px-1.5 text-[7px] uppercase tracking-[.16em] text-white/30 sm:block">Workspace</p>
      <nav aria-hidden="true" className="grid gap-1">
        {navigation.map((Icon, index) => (
          <span
            key={index}
            className={`flex h-7 items-center justify-center gap-2 rounded-md px-1.5 sm:justify-start ${index === 0 ? 'bg-[var(--project-accent)]/12 text-[var(--project-accent)]' : 'text-white/35'}`}
          >
            <Icon className="size-3.5 shrink-0" />
            <span className="hidden truncate text-[8px] sm:block">{['Overview', 'Records', 'People', 'Approvals'][index]}</span>
          </span>
        ))}
      </nav>
      <div className="mt-auto hidden h-px bg-white/[.07] sm:block" />
      <span className="mt-2 hidden text-[7px] text-white/30 sm:block">Demo workspace</span>
    </aside>
  )
}

function WorkspaceHeader() {
  return (
    <div className="flex h-8 items-center justify-end gap-2 border-b border-white/[.07] px-3">
      <div className="flex h-5 w-28 items-center gap-1.5 rounded border border-white/[.08] bg-white/[.025] px-1.5 text-white/30 sm:w-36">
        <Search className="size-2.5" />
        <span className="text-[7px]">Search workspace</span>
      </div>
      <Bell className="size-3 text-white/35" />
      <span className="size-4 rounded-full border border-white/10 bg-white/10" />
    </div>
  )
}

function NorthinghamDashboard() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-[2.25rem_minmax(0,1fr)] sm:grid-cols-[7.25rem_minmax(0,1fr)]">
      <Sidebar title="Northingham" />
      <div className="flex min-w-0 flex-col">
        <WorkspaceHeader />
        <div className="min-h-0 flex-1 overflow-hidden p-2.5 sm:p-3">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[7px] uppercase tracking-[.15em] text-white/35">Operations</p>
              <h3 className="truncate text-[11px] font-medium text-white/85 sm:text-xs">Business overview</h3>
            </div>
            <span className="shrink-0 rounded border border-white/[.08] px-1.5 py-1 text-[7px] text-white/45">DEMO PERIOD</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <MetricCard label="Open orders" value="24" detail="Example" />
            <MetricCard label="For approval" value="06" detail="Example" />
            <MetricCard label="Attendance" value="92%" detail="Example" />
          </div>

          <div className="mt-2 grid gap-2 lg:grid-cols-[1.08fr_.92fr]">
            <WorkflowCard />
            <AttendanceCard />
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="min-w-0 rounded-md border border-white/[.08] bg-white/[.025] px-2 py-1.5">
      <p className="truncate text-[7px] text-white/40">{label}</p>
      <div className="mt-0.5 flex items-baseline justify-between gap-1">
        <span className="text-[11px] font-semibold text-white/80">{value}</span>
        <span className="hidden text-[6px] text-white/30 xl:block">{detail}</span>
      </div>
    </div>
  )
}

function WorkflowCard() {
  return (
    <div className="min-w-0 rounded-md border border-white/[.08] bg-white/[.02] p-2">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="truncate text-[8px] font-medium text-white/70">Approval workflow</p>
        <span className="shrink-0 text-[6px] uppercase tracking-[.1em] text-white/30">Illustrative</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {workflow.map((step, index) => (
          <div key={step} className="min-w-0 text-center">
            <div className={`mx-auto grid size-4 place-items-center rounded-full border ${index < 2 ? 'border-[var(--project-accent)]/45 bg-[var(--project-accent)]/15 text-[var(--project-accent)]' : 'border-white/10 bg-white/[.03] text-white/30'}`}>
              {index < 2 ? <Check className="size-2.5" /> : <span className="text-[7px]">{index + 1}</span>}
            </div>
            <span className="mt-1 block truncate text-[6px] text-white/45 sm:text-[7px]">{step}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 border-t border-white/[.07] pt-1.5">
        <div className="flex items-center justify-between gap-2 text-[7px]">
          <span className="truncate text-white/45">Sample purchase request</span>
          <span className="shrink-0 text-[6px] text-[var(--project-accent)]">DEMO-014</span>
        </div>
      </div>
    </div>
  )
}

function AttendanceCard() {
  return (
    <div className="min-w-0 rounded-md border border-white/[.08] bg-white/[.02] p-2">
      <div className="mb-1.5 flex items-center justify-between gap-1">
        <p className="truncate text-[8px] font-medium text-white/70">Attendance</p>
        <span className="text-[6px] text-white/35">EXAMPLE</span>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-x-2 border-b border-white/[.07] pb-1 text-[6px] uppercase tracking-wide text-white/30">
        <span>Employee</span><span>Status</span>
      </div>
      {['Sample employee A', 'Sample employee B', 'Sample employee C'].map((name, index) => (
        <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-white/[.05] py-1 last:border-0">
          <span className="truncate text-[7px] text-white/55">{name}</span>
          <span className="flex items-center gap-1 text-[6px] text-white/45"><span className={`size-1 rounded-full ${index === 1 ? 'bg-amber-300/80' : 'bg-emerald-300/80'}`} />{index === 1 ? 'Review' : 'Present'}</span>
        </div>
      ))}
    </div>
  )
}

function VitaliaDashboard() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-[2.25rem_minmax(0,1fr)] sm:grid-cols-[7.25rem_minmax(0,1fr)]">
      <Sidebar title="Vitalia" />
      <div className="flex min-w-0 flex-col">
        <WorkspaceHeader />
        <div className="min-h-0 flex-1 overflow-hidden p-2.5 sm:p-3">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[7px] uppercase tracking-[.15em] text-white/35">Workspace</p>
              <h3 className="truncate text-[11px] font-medium text-white/85 sm:text-xs">Application dashboard</h3>
            </div>
            <span className="flex shrink-0 items-center gap-1 rounded border border-white/[.08] px-1.5 py-1 text-[7px] text-white/45"><CheckCircle2 className="size-2.5 text-[var(--project-accent)]" /> DEMO</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <MetricCard label="Demo records" value="128" detail="Example" />
            <MetricCard label="Example queue" value="12" detail="Example" />
            <MetricCard label="Modules" value="04" detail="Example" />
          </div>

          <div className="mt-2 grid gap-2 lg:grid-cols-[.85fr_1.15fr]">
            <ModuleOverview />
            <RecordTable />
          </div>
        </div>
      </div>
    </div>
  )
}

function ModuleOverview() {
  return (
    <div className="min-w-0 rounded-md border border-white/[.08] bg-white/[.02] p-2">
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <p className="text-[8px] font-medium text-white/70">Module overview</p>
        <BarChart3 className="size-3 text-[var(--project-accent)]" />
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {['01', '02', '03', '04'].map((module, index) => (
          <div key={module} className="flex items-center gap-1.5 rounded border border-white/[.07] bg-white/[.02] p-1.5">
            <span className="grid size-4 shrink-0 place-items-center rounded bg-[var(--project-accent)]/12 text-[6px] text-[var(--project-accent)]">{module}</span>
            <span className="truncate text-[7px] text-white/55">Module {index + 1}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-8 items-end gap-1 rounded border border-white/[.06] bg-white/[.015] px-2 pb-1.5 pt-1">
        {[35, 54, 42, 74, 60, 88, 58, 70, 48, 80, 64, 93].map((height, index) => (
          <span key={index} className="min-w-0 flex-1 rounded-t-sm bg-[var(--project-accent)]/60" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  )
}

function RecordTable() {
  return (
    <div className="min-w-0 rounded-md border border-white/[.08] bg-white/[.02] p-2">
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <p className="truncate text-[8px] font-medium text-white/70">Management table</p>
        <span className="text-[6px] uppercase tracking-[.1em] text-white/30">Sample records</span>
      </div>
      <div className="grid grid-cols-[.7fr_1.3fr_auto] gap-1 border-b border-white/[.07] pb-1 text-[6px] uppercase tracking-wide text-white/30">
        <span>Reference</span><span>Entry</span><span>Status</span>
      </div>
      {['DEMO-001', 'DEMO-002', 'DEMO-003'].map((record, index) => (
        <div key={record} className="grid grid-cols-[.7fr_1.3fr_auto] items-center gap-1 border-b border-white/[.05] py-1.5 last:border-0">
          <span className="truncate font-mono text-[6px] text-[var(--project-accent)]/80">{record}</span>
          <span className="truncate text-[7px] text-white/55">Sample entry {String.fromCharCode(65 + index)}</span>
          <span className="flex items-center gap-1 text-[6px] text-white/45"><span className="size-1 rounded-full bg-[var(--project-accent)]" />{index === 1 ? 'Review' : 'Active'}</span>
        </div>
      ))}
    </div>
  )
}
