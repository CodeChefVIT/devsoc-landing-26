type Event = {
  id: string;
  day: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24h)
  datetime: string; // ISO-ish for sorting
  title: string;
  subtitle: string;
  description: string;
};

const events: Event[] = [
  // DAY 1
  {
    id: 'd1-0930',
    day: 1,
    date: '2026-02-14',
    time: '09:30',
    datetime: '2026-02-14T09:30',
    title: 'Opening Ceremony',
    subtitle: 'Kickoff & vibes',
    description: 'Welcome address, event overview, and setting the tone for the next three days.',
  },
  {
    id: 'd1-1100',
    day: 1,
    date: '2026-02-14',
    time: '11:00',
    datetime: '2026-02-14T11:00',
    title: 'Keynote Session',
    subtitle: 'The big picture',
    description: 'Industry experts talk about trends, tech, and where things are headed.',
  },
  {
    id: 'd1-1400',
    day: 1,
    date: '2026-02-14',
    time: '14:00',
    datetime: '2026-02-14T14:00',
    title: 'Workshop Sprint',
    subtitle: 'Hands-on time',
    description: 'Interactive workshops focused on practical skills and real-world problems.',
  },
  {
    id: 'd1-1730',
    day: 1,
    date: '2026-02-14',
    time: '17:30',
    datetime: '2026-02-14T17:30',
    title: 'Networking Hour',
    subtitle: 'Meet the people',
    description: 'Connect with peers, speakers, and mentors over casual conversations.',
  },

  // DAY 2
  {
    id: 'd2-1000',
    day: 2,
    date: '2026-02-15',
    time: '10:00',
    datetime: '2026-02-15T10:00',
    title: 'Panel Discussion',
    subtitle: 'Multiple perspectives',
    description: 'A moderated discussion with professionals sharing diverse experiences.',
  },
  {
    id: 'd2-1230',
    day: 2,
    date: '2026-02-15',
    time: '12:30',
    datetime: '2026-02-15T12:30',
    title: 'Lightning Talks',
    subtitle: 'Short & spicy',
    description: 'Quick talks packed with insights, ideas, and a little chaos.',
  },
  {
    id: 'd2-1500',
    day: 2,
    date: '2026-02-15',
    time: '15:00',
    datetime: '2026-02-15T15:00',
    title: 'Build Session',
    subtitle: 'Ship something',
    description: 'Focused time to work on projects, experiment, and get feedback.',
  },

  // DAY 3
  {
    id: 'd3-0900',
    day: 3,
    date: '2026-02-16',
    time: '09:00',
    datetime: '2026-02-16T09:00',
    title: 'Morning Brief',
    subtitle: 'Plan the finale',
    description: 'Recap so far and outline what’s coming on the final day.',
  },
  {
    id: 'd3-1130',
    day: 3,
    date: '2026-02-16',
    time: '11:30',
    datetime: '2026-02-16T11:30',
    title: 'Project Demos',
    subtitle: 'Show & tell',
    description: 'Teams present what they’ve built and the stories behind it.',
  },
  {
    id: 'd3-1430',
    day: 3,
    date: '2026-02-16',
    time: '14:30',
    datetime: '2026-02-16T14:30',
    title: 'Closing Talk',
    subtitle: 'Lessons & takeaways',
    description: 'Wrapping things up with reflections, learnings, and what’s next.',
  },
  {
    id: 'd3-1600',
    day: 3,
    date: '2026-02-16',
    time: '16:00',
    datetime: '2026-02-16T16:00',
    title: 'Farewell',
    subtitle: 'Until next time',
    description: 'Final goodbyes, photos, and post-event feels.',
  },
];

export { type Event, events };
