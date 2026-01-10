'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { italianno, lato, theSansMono } from '@/app/fonts';

interface TimelineEvent {
  id: number;
  title: string;
  time: string;
  description: string;
  day: number;
}

const Timeline = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events: TimelineEvent[] = [
    {
      id: 1,
      title: 'Gates Open',
      time: '19:30',
      description:
        'Let the Hack begin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      day: 1,
    },
    {
      id: 2,
      title: 'Opening Ceremony',
      time: '20:00',
      description:
        'Welcome to DevSoc 2026. Get ready for an amazing hacking experience with workshops, mentors, and prizes.',
      day: 1,
    },
    {
      id: 3,
      title: 'Hacking Begins',
      time: '21:00',
      description:
        'Start coding! The hacking session officially begins. Form teams and start working on your innovative projects.',
      day: 1,
    },
  ];

  const currentEvent = events[currentEventIndex];

  const nextEvent = () => {
    setCurrentEventIndex(prev => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex(prev => (prev - 1 + events.length) % events.length);
  };

  const [hours, minutes] = currentEvent.time.split(':');

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-6xl font-bold mb-4 ${theSansMono.className}`}>Timeline</h1>
        </div>

        {/* Main Timeline Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Event Details */}
            <div className="space-y-6">
              {/* Event Title */}
              <div>
                <h2
                  className={`text-6xl font-extrabold
         bg-[radial-gradient(circle_at_center,_#8C20CD,_#E700B7,_#8C20CD)]
         bg-clip-text text-transparent mb-2 font-lato ${lato.className} leading-1 `}
                >
                  {currentEvent.title}
                </h2>
                <p className="text-xl text-gray-300 font-lato">Let the Hack begin</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-lg font-lato">
                {currentEvent.description}
              </p>
            </div>

            {/* Right Section - Time Display */}
            <div className="relative">
              {/* Day indicator */}
              <div className="absolute -top-8 right-0">
                <span className={`text-4xl text-white ${italianno.className}`}>
                  Day {currentEvent.day}
                </span>
              </div>

              {/* Large Time Display */}
              <div className="relative">
                <div className="flex items-baseline justify-center">
                  <span className="text-8xl font-thin text-gray-800 font-lato">{hours}</span>
                  <span className="text-6xl font-thin text-white mx-2 font-lato">:</span>
                  <span className="text-8xl font-thin text-gray-800 font-lato">{minutes}</span>
                </div>

                {/* Horizontal Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 -translate-y-1/2">
                  {/* Timeline Markers */}
                  <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 border-2 border-gray-600"></div>
                  <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-white rounded-full -translate-y-1/2 -translate-x-1/2 border-2 border-gray-600"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end mt-16 space-x-4">
            <button
              onClick={prevEvent}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center group"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextEvent}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center group"
              aria-label="Next event"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentEventIndex
                    ? 'bg-purple-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                )}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
