import { describe, expect, it } from 'vitest'
import { caseStudies } from './caseStudies'

describe('case study data shape', () => {
  it('has four studies with unique slugs', () => {
    expect(caseStudies).toHaveLength(4)
    const slugs = caseStudies.map((study) => study.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it.each(caseStudies.map((study) => [study.slug, study] as const))(
    '%s has every SAR field filled',
    (_slug, study) => {
      for (const field of [
        study.title,
        study.hook,
        study.company,
        study.role,
        study.period,
        study.accent,
        study.context,
        study.situation,
      ]) {
        expect(field.trim()).not.toBe('')
      }
      expect(study.tags.length).toBeGreaterThan(0)
      expect(study.action.length).toBeGreaterThan(0)
      expect(study.result.length).toBeGreaterThan(0)
      for (const paragraph of [...study.action, ...study.result]) {
        expect(paragraph.trim()).not.toBe('')
      }
    },
  )
})
