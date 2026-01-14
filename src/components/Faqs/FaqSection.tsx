"use client";

import { useState } from "react";
import { SectionHeading } from '@/components/ui';

const faqs = [
  {
    question: "Is the hackathon free to attend?",
    answer:
      "Yes, DevSOC'26 is completely free to attend thanks to our sponsors.",
  },
  {
    question: "How many team members do I need to have?",
    answer:
      "You can form a team of 2-5 members. Aim for a mix of designers and developers.",
  },
  {
    question: "I don't have much experience with coding. Should I still participate?",
    answer:
      "Absolutely! Even if you're new to tech, this is a great chance to learn, connect with seniors, and gain hands-on experience.\nWe also consider your background and experience level during evaluation.",
  },
  {
    question: "Will there be mentorship available during the hackathon?",
    answer:
      "Yes! Mentors from different domains will be available throughout the hackathon to guide you, give feedback & help you overcome challenges.",
  },
];


export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative overflow-hidden px-6 py-24" suppressHydrationWarning>
    <div
      className="pointer-events-none absolute inset-0 z-[1] bg-[url('/images/faq-bg.png')] bg-cover bg-center bg-no-repeat opacity-90"
    />
      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="flex justify-end" suppressHydrationWarning>
          <SectionHeading title="FAQs" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`pb-4 ${index !== faqs.length - 1 ? 'border-b border-white/20' : ''}`}>
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left group py-2"
              >
                <span className="font-lato font-bold text-white text-2xl leading-[29px]">
                  {faq.question}
                </span>

                <span className="ml-4 text-base font-light flex-shrink-0 text-white">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="font-lato font-bold text-[#ADAAF7] whitespace-pre-line text-base leading-[19px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



