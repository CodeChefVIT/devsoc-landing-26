export type Event = {
  id: string;
  day: number;
  date: string;
  time: string;
  datetime: string;
  title: string;
  subtitle: string;
  description: string;
};

export type { Event as TimelineEvent };

export type TimelineTopProps = {
  currentEvent: Event;
};

export type TimelineMiddleProps = {
  currentEvent: Event;
  currentEventIndex: number;
  events: Event[];
  onIndexChange?: (i: number) => void;
};

export type TimelineBottomProps = {
  currentEvent: Event;
  onPrevious: () => void;
  onNext: () => void;
};
