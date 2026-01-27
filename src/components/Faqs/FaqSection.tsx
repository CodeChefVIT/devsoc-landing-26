'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui';
import { faqs } from '@/data/faq';
import { FaPlus, FaMinus } from 'react-icons/fa6';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div id="faqs" className="relative px-6 py-24" suppressHydrationWarning>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex justify-end">
          <SectionHeading title="FAQs" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`pb-4 ${index !== faqs.length - 1 ? 'border-b border-white/20' : ''}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left group py-2"
              >
                <span className="font-lato font-bold text-white text-xl leading-7.25">
                  {faq.question}
                </span>

                <span className="ml-4 text-base font-light shrink-0 text-white">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="font-lato font-bold text-[#ADAAF7] whitespace-pre-line text-base leading-4.75">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
