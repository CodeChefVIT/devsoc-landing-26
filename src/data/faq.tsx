interface FAQ {
  question: string;
  answer: React.ReactNode;
}

export type { FAQ };
export const faqs: FAQ[] = [
  {
    question: 'Is the hackathon free to attend?',
    answer: "Yes, DevSOC'26 is completely free to attend thanks to our sponsors.",
  },
  {
    question: 'How many team members do I need to have?',
    answer: 'You can form a team of 2-5 members. Aim for a mix of designers and developers.',
  },
  {
    question: "I don't have much experience with coding. Should I still participate?",
    answer:
      "Absolutely! Even if you're new to tech, this is a great chance to learn, connect with seniors, and gain hands-on experience.\nWe also consider your background and experience level during evaluation.",
  },
  {
    question: 'Will there be mentorship available during the hackathon?',
    answer:
      'Yes! Mentors from different domains will be available throughout the hackathon to guide you, give feedback & help you overcome challenges.',
  },
  {
    question: 'Will participants get On-Duty?',
    answer: ' Yes, participants will get OD throughout the event duration.',
  },
  {
    question: 'Have any more queries?',
    answer: (
      <>
        If you have any further doubts, feel free to ask your doubts on our{' '}
        <a
          href="https://discord.gg/wrtHFfep6M"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#ADAAF7] hover:text-white transition"
        >
          Discord server
        </a>
        .
      </>
    ),
  },
];
