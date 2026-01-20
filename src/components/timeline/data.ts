export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  description: string;
  day: string;
}

export const EVENTS: TimelineEvent[] = [
  {
    id: '1',
    time: '19:30',
    title: 'Gates Open',
    subtitle: 'Let the Hack begin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    day: 'Day 1',
  },
  {
    id: '2',
    time: '20:00',
    title: 'Opening Ceremony',
    subtitle: 'Kickoff & announcements',
    description:
      'Introduction to the event, rules, schedule overview, and opening remarks from the organizers.',
    day: 'Day 1',
  },
  {
    id: '3',
    time: '21:00',
    title: 'Hacking Begins',
    subtitle: 'Let the build start',
    description: 'Teams start working on their projects. Mentors and resources become available.',
    day: 'Day 1',
  },
];
