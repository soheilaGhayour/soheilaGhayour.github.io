export type CaseStudy = {
  slug: string
  title: string
  hook: string
  company: string
  role: string
  period: string
  accent: string
  tags: string[]
  context: string
  situation: string
  action: string[]
  result: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'query-builder',
    title: 'Visual SQL Query Builder',
    hook: 'A Grafana-style UI that lets non-technical users build custom KPI charts — no SQL required.',
    company: 'ValueWorks.ai',
    role: 'Frontend Engineer',
    period: '2024 – 2026',
    accent: '#7c6cff',
    tags: ['TypeScript', 'SQL generation', 'Data visualization'],
    context:
      'ValueWorks.ai is a business-intelligence platform where executives track company KPIs. I worked as a frontend engineer on the analytics surface of the product, next to my M.Sc. studies.',
    situation:
      'Custom KPI charts could only be created by people who knew SQL. Every new chart request from a customer went through engineering, which made custom analytics slow for customers and expensive for the team. The product needed a way for non-technical users to define their own metrics — without ever seeing a line of SQL.',
    action: [
      'I built a visual, Grafana-style query builder: users compose a query from familiar controls — measures, aggregations, filters, groupings, time ranges — and the builder translates that configuration into SQL executed by the backend.',
      'The core design problem was mapping a friendly configuration model onto correct SQL semantics. I designed the intermediate representation that the UI edits and the generator consumes, keeping the two concerns separate: the UI never concatenates SQL strings, it edits a typed configuration object with its own validation rules.',
      'Edge cases drove most of the iteration: aggregations that only combine with certain groupings, filters on computed values, and keeping generated queries efficient enough for interactive chart previews. I worked closely with backend engineers on the execution contract so invalid configurations are rejected in the UI before a query ever leaves the browser.',
    ],
    result: [
      'Non-technical users now independently construct custom KPI charts — chart requests that previously required an engineer became self-service.',
      'The typed configuration layer made the feature testable: query generation is covered by unit tests instead of manual spot checks against a database.',
    ],
  },
  {
    slug: 'pivot-table',
    title: 'Pivot Table Ownership & Performance',
    hook: 'Owning a complex Syncfusion pivot table: ~25 tickets, vendor escalations, and a large-dataset performance fix.',
    company: 'ValueWorks.ai',
    role: 'Frontend Engineer',
    period: '2024 – 2026',
    accent: '#4cc38a',
    tags: ['TypeScript', 'Syncfusion', 'Performance', 'Vendor management'],
    context:
      'The platform ships an interactive pivot table — built on the Syncfusion component library — that customers use to slice KPI data. I owned this feature end to end: bugs, customer tickets, and its relationship with the vendor.',
    situation:
      'The pivot table sat on the critical path for reporting customers, and it hurt in two ways: a steady stream of defect tickets, and a performance regression that made the table unusable on large datasets. Because the core widget is third-party, every problem needed a diagnosis first: our bug or theirs?',
    action: [
      'I triaged and resolved around 25 tickets against the component, building up a reproduction-first workflow: isolate the behavior in a minimal sample outside our app, then either fix our integration or file a precise defect against the vendor.',
      'For genuine library defects I escalated to Syncfusion with minimal reproductions and tracked the fixes through their release cycle — keeping workarounds in our code clearly marked with the upstream ticket so they could be removed later.',
      'For the large-dataset regression I profiled the rendering path, identified where our configuration forced the component into its slowest code path, and reworked the data flow so the table stayed responsive at customer-scale row counts.',
    ],
    result: [
      'The ticket stream dried up from a constant drip to occasional one-offs, and the performance regression was fully resolved for large customers.',
      'The reproduction-first workflow shortened the diagnosis loop for every subsequent third-party issue — our bug vs. vendor bug became a quick question instead of a debate.',
    ],
  },
  {
    slug: 'lexical-editor',
    title: 'Custom Rich-Text Editor',
    hook: 'A Lexical-based editor that let non-technical admins manage customer-facing documentation without code.',
    company: 'SinanSoft Inc.',
    role: 'Frontend Developer',
    period: '2021 – 2024',
    accent: '#e5484d',
    tags: ['React', 'Lexical', 'Component design', 'Content management'],
    context:
      'SinanSoft built a contract-management product for business customers. I was one of the frontend developers responsible for the product’s React foundation and its customer-facing content.',
    situation:
      'Customer-facing documentation was maintained by developers: every text change was a code change with a release cycle behind it. Admins — the people who actually knew what the content should say — could not touch it. Off-the-shelf editors did not fit the document structures the product needed.',
    action: [
      'I engineered a custom rich-text editor on top of Meta’s Lexical framework, chosen for its headless architecture: the editor’s document model, commands, and rendering are all programmable rather than baked in.',
      'I built the node types, toolbar, and serialization the product needed, keeping the persisted format structured so documents render consistently in the editor and in the customer-facing views.',
      'The hard part of a custom editor is the long tail of editing behavior — selection, paste, undo, nested structures. I invested in making the common flows robust for non-technical users rather than chasing feature breadth.',
    ],
    result: [
      'Non-technical admins gained code-free, independent content management — documentation changes stopped being developer work entirely.',
      'The editor became a reusable component in the product’s component system rather than a one-off.',
    ],
  },
  {
    slug: 'booking-app',
    title: 'React Native Booking App',
    hook: 'A booking app shipped to both stores — Apple Pay / Google Pay checkout and cross-platform push notifications.',
    company: 'SinanSoft Inc.',
    role: 'Frontend Developer',
    period: '2021 – 2024',
    accent: '#f5a623',
    tags: ['React Native', 'Payments', 'FCM', 'Amazon SNS'],
    context:
      'Alongside the web product, SinanSoft shipped a customer-facing React Native booking app. I built major parts of its user journey and the platform integrations that made it production-ready.',
    situation:
      'A booking product lives or dies on two flows that are unforgiving to get wrong: paying and being notified. Both are platform-specific under the hood — Apple Pay vs. Google Pay, APNs vs. FCM — but the product needed them to behave identically for users on either platform.',
    action: [
      'I integrated Apple Pay and Google Pay checkout behind a single payment flow in the app, handling the platform differences — capability detection, sheet presentation, error and cancellation states — inside one interface.',
      'I wired push notifications through Firebase Cloud Messaging and Amazon SNS, covering the platform permission models and the app states (foreground, background, cold start) that decide whether a notification opens the right screen.',
      'Both flows got the defensive treatment payments deserve: explicit handling for declined payments, interrupted sessions, and duplicate-tap protection around checkout.',
    ],
    result: [
      'The app shipped to the App Store and Google Play with native-feeling checkout on both platforms.',
      'Bookings and payment confirmations reach users reliably on both platforms through the unified notification pipeline.',
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
