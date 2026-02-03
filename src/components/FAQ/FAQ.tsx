'use client';
import { FaPlus, FaMinus } from 'react-icons/fa6';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/ui';
import { faqs } from '@/data/faq';

export default function FAQ() {
  return (
    <div id="faqs" className="relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex justify-end">
          <SectionHeading title="FAQs" />
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/20">
              <AccordionTrigger
                className="
                group
                flex
                w-full
                items-center
                justify-between
                text-left
                font-lato
                font-bold
                text-white
                text-xl
                hover:no-underline
                [&>svg]:hidden
              "
              >
                <span>{faq.question}</span>

                <span className="ml-4 shrink-0">
                  <FaPlus className="group-data-[state=open]:hidden" />
                  <FaMinus className="hidden group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="font-lato font-bold text-[#ADAAF7] text-base whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
