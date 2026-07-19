export type SkillGroup = { group: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  {
    group: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    group: 'Frameworks',
    items: [
      'React',
      'React Native',
      'Vue',
      'Redux',
      'Redux Toolkit Query',
      'Formik',
      'Material UI',
    ],
  },
  {
    group: 'APIs & Data',
    items: [
      'REST API integration',
      'SQL (query generation)',
      'Data Visualization',
      'Firebase Cloud Messaging',
      'Amazon SNS',
    ],
  },
  {
    group: 'Testing & Tooling',
    items: ['Mocha', 'Vitest', 'ESLint', 'Git', 'Node.js scripting', 'CI/CD'],
  },
]
