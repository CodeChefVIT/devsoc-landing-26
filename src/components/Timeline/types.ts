export type TimelineItem = {
  id: string;
  day: number;
  date: string;
  time: string;
  datetime: string;
  title: string;
  subtitle: string;
  description: string;
};

export type TimelineTopProps = {
  currentEvent: TimelineItem;
};

export type TimelineMiddleProps = {
  currentEvent: TimelineItem;
  currentEventIndex: number;
  events: TimelineItem[];
  onIndexChange?: (i: number) => void;
};

export type TimelineBottomProps = {
  currentEvent: TimelineItem;
  onPrevious: () => void;
  onNext: () => void;
};
