// Verbatim quotes from LinkedIn recommendations (visibility: all LinkedIn
// members) — do not edit the text, they are other people's words.
export type Recommendation = {
  name: string
  title: string
  relationship: string
  date: string
  text: string
}

export const recommendations: Recommendation[] = [
  {
    name: 'Dr. Sebastian Walther',
    title: 'Managing Director @ ValueWorks',
    relationship: 'Senior colleague at ValueWorks.ai',
    date: 'May 2026',
    text: 'Soheila is a highly proactive frontend developer who excels at taking full ownership of complex Vue.js tickets and driving them to completion. Her flexibility, strong communication, and focus on clean UI architecture measurably accelerated our release cycles and reduced frontend bugs. She is an outstanding teammate, and I would gladly work with her again.',
  },
  {
    name: 'Christopher Olofson',
    title: 'Legal Technology & Professional Services Executive',
    relationship: 'Senior stakeholder on a multi-year project',
    date: 'May 2024',
    text: "Soheila is an excellent software engineer who supported our business on a multi-year project developing a range of polished UI assignments in React, including reusable components. Her reliability and professionalism earned respect of our whole team, and I'd gladly work with her again.",
  },
  {
    name: 'Parham Heydari',
    title: 'Senior Software Engineer — Frontend & Full-Stack',
    relationship: 'Managed Soheila directly',
    date: 'June 2022',
    text: "Soheila is one of the most talented and dedicated software developers that I've worked with. believing in deliver good quality and clean code was something that impressed me. her eager to learn and her speed at learning was excellent. last but not least her communication ability and of course her english accent is really something!",
  },
  {
    name: 'Mina Farshadmehr',
    title: 'Frontend Developer (React)',
    relationship: 'Teammate',
    date: 'May 2023',
    text: 'It was a pleasure to work with such a friendly, positive person who is also very passionate about her career and is always trying to improve herself.',
  },
]
