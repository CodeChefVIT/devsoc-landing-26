import { motion, AnimatePresence } from 'framer-motion';
import { Event } from '@/data';

interface TimelineBackgroundProps {
  activeEvent: Event;
}

export function TimelineBackground({ activeEvent }: TimelineBackgroundProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={`time-bg-${activeEvent.id}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-[20rem] md:text-[16rem] lg:text-[18rem] xl:text-[30rem] 2xl:text-[40rem] font-black text-white/10 select-none font-lato"
        >
          {activeEvent.time}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
