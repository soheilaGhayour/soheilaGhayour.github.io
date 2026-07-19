export type TimelineEntry = {
  year: string
  title: string
  subtitle?: string
  highlights: string[]
}

export const timeline: TimelineEntry[] = [
  {
    year: '2018',
    title: 'B.Sc. Computer Science',
    subtitle: 'Sadjad University of Technology · 2018 – 2022',
    highlights: ['Where the fundamentals came from.'],
  },
  {
    year: '2020',
    title: 'Arashweb — Frontend Engineer',
    subtitle: 'Promoted from internship · 2020 – 2021',
    highlights: [
      'Shipped my first production React Native apps: an educational app MVP and a restaurant tablet-ordering app, end to end.',
      'Mentored two engineering interns through a car-rental platform, reviewing every PR to a stable release.',
    ],
  },
  {
    year: '2021',
    title: 'SinanSoft — Frontend Developer',
    subtitle: '2021 – 2024',
    highlights: [
      'Architected the frontend foundation for a contract-management MVP and a reusable component system.',
      'Built a custom Lexical rich-text editor and a React Native booking app with Apple Pay / Google Pay checkout.',
    ],
  },
  {
    year: '2024',
    title: 'Moved to Germany — M.Sc. AI in Autonomous Systems',
    subtitle: 'Technische Hochschule Ingolstadt · 2024 – 2026 (expected)',
    highlights: [
      'Relocated to Bavaria for a master’s degree that pairs my frontend craft with applied AI.',
    ],
  },
  {
    year: '2024',
    title: 'ValueWorks.ai — Frontend Engineer',
    subtitle: 'Part-time alongside the M.Sc. · 2024 – 2026',
    highlights: [
      'Owned an interactive Syncfusion pivot table: ~25 tickets, vendor escalations, and a large-dataset performance fix.',
      'Built a visual, Grafana-style query builder that turns user configurations into SQL for custom KPI charts.',
    ],
  },
  {
    year: '2026',
    title: 'Thesis & building in public',
    highlights: [
      'Writing my master’s thesis and building side projects — including the job-application tracker that will appear here as a live demo.',
    ],
  },
]
