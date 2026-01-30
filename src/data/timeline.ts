import type { TimelineItem } from '@/components/Timeline/types';

const timeline: TimelineItem[] = [
  // DAY 1
  {
    id: 'd1-2000',
    day: 1,
    date: '2026-02-08',
    time: '21:00',
    datetime: '2026-02-08T21:00',
    title: 'Doors Open & Check-in',
    subtitle: 'Welcome to DevSOC',
    description:
      'Participants arrive, complete registrations and settle in. The hackathon officially begins with onboarding and venue access.',
  },
  {
    id: 'd1-2200',
    day: 1,
    date: '2026-02-08',
    time: '22:00',
    datetime: '2026-02-08T22:00',
    title: 'Opening Ceremony',
    subtitle: 'Kick-off & vision',
    description:
      'Introduction to DEVSOC, sponsor shoutouts, rules walkthrough and an energizing kickoff to spark creativity and collaboration.',
  },
  {
    id: 'd1-2300',
    day: 1,
    date: '2026-02-08',
    time: '23:00',
    datetime: '2026-02-08T23:00',
    title: 'Hacking Begins',
    subtitle: 'Build mode ON',
    description:
      'Teams dive into ideation, design, and development as they bring their ideas to life.',
  },

  // DAY 2
  {
    id: 'd2-0230',
    day: 2,
    date: '2026-02-09',
    time: '02:30',
    datetime: '2026-02-09T02:30',
    title: 'Review 1',
    subtitle: 'Early progress check',
    description:
      'Initial evaluation round to validate problem statements and provide feedback on technical direction.',
  },
  {
    id: 'd2-0900',
    day: 2,
    date: '2026-02-09',
    time: '09:00',
    datetime: '2026-02-09T09:00',
    title: 'Hacking Session',
    subtitle: 'Deep work',
    description:
      'Focused build time to incorporate feedback, refine features and designs, and strengthen project foundations.',
  },
  {
    id: 'd2-1100',
    day: 2,
    date: '2026-02-09',
    time: '11:00',
    datetime: '2026-02-09T11:00',
    title: 'Panel Discussion',
    subtitle: 'Learn from Google industry experts and gain real world insights.',
    description:
      'A technical session by industry professionals covering tools, trends and best practices relevant to building projects.',
  },
  {
    id: 'd2-1400',
    day: 2,
    date: '2026-02-09',
    time: '14:00',
    datetime: '2026-02-09T14:00',
    title: 'Hacking Session',
    subtitle: 'Build & iterate',
    description:
      'Teams continue building, integrating APIs, training models, and polishing core functionality.',
  },

  {
    id: 'd2-2300',
    day: 2,
    date: '2026-02-09',
    time: '23:00',
    datetime: '2026-02-09T23:00',
    title: 'Engagement Activity',
    subtitle: 'Time to unwind',
    description:
      'Light hearted engagement activities to boost morale, encourage networking, and refresh participants.',
  },

  // DAY 3
  {
    id: 'd3-0030',
    day: 3,
    date: '2026-02-10',
    time: '00:30',
    datetime: '2026-02-10T00:30',
    title: 'Hacking Session',
    subtitle: 'Focused development',
    description:
      'Overnight hacking continues as teams work towards feature completion and stability.',
  },

  {
    id: 'd3-1000',
    day: 3,
    date: '2026-02-10',
    time: '10:00',
    datetime: '2026-02-10T010:00',
    title: 'Speaker Session',
    subtitle: 'Learn from experts',
    description:
      'A word from our sponsors packed with industry insights, practical tools, and tips to level up your tech journey.',
  },
  {
    id: 'd3-1100',
    day: 3,
    date: '2026-02-10',
    time: '11:00',
    datetime: '2026-02-10T011:00',
    title: 'Hacking Session',
    subtitle: 'Polish & finalize',
    description: 'Teams focus on UI polish, documentation, demos, and final integrations.',
  },
  {
    id: 'd3-1400',
    day: 3,
    date: '2026-02-10',
    time: '14:00',
    datetime: '2026-02-10T14:00',
    title: 'Review 2',
    subtitle: 'Pre-final evaluation',
    description:
      'Second review round where judges assess progress and validate solutions to shortlist top teams.',
  },
  {
    id: 'd3-2000',
    day: 3,
    date: '2026-02-10',
    time: '20:00',
    datetime: '2026-02-10T20:00',
    title: 'Final Submission',
    subtitle: 'Code freeze',
    description: 'All teams submit their projects for evaluation.',
  },

  // DAY 4
  {
    id: 'd4-0800',
    day: 4,
    date: '2026-02-11',
    time: '08:00',
    datetime: '2026-02-11T08:00',
    title: 'Final Pitches',
    subtitle: 'Showtime',
    description:
      'Shortlisted teams present their solutions to judges, showcasing demos, impact, and technical depth.',
  },
  {
    id: 'd4-1200',
    day: 4,
    date: '2026-02-11',
    time: '12:00',
    datetime: '2026-02-11T12:00',
    title: 'Closing Ceremony',
    subtitle: 'Wrap-up',
    description: 'Partner acknowledgements, closing remarks and officially concluding DEVSOC 2026.',
  },
];

export { timeline };
export type { TimelineItem };
