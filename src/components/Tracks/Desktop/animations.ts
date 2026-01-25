import type { TargetAndTransition } from 'framer-motion';

const COLUMNS = 4;

export const getAnimationVariant = (
  expandedIndex: number | null,
  currentIndex: number
): TargetAndTransition => {
  if (expandedIndex === null) return {};
  if (expandedIndex === currentIndex) return {};

  const expandedRow = Math.floor(expandedIndex / COLUMNS);
  const expandedCol = expandedIndex % COLUMNS;
  const currentRow = Math.floor(currentIndex / COLUMNS);
  const currentCol = currentIndex % COLUMNS;

  // Determine direction to fly
  if (currentRow < expandedRow) {
    // Fly up
    return { y: '-200%', opacity: 0 };
  } else if (currentRow > expandedRow) {
    // Fly down
    return { y: '200%', opacity: 0 };
  } else {
    // Same row
    if (currentCol < expandedCol) {
      // Fly left
      return { x: '-200%', opacity: 0 };
    } else {
      // Fly right
      return { x: '200%', opacity: 0 };
    }
  }
};

export const getExpandedAnimationProps = (index: number): TargetAndTransition => {
  return {
    scale: 3.5,
    x: `${(1.5 - (index % COLUMNS)) * 100}%`,
    y: `${(1 - Math.floor(index / COLUMNS)) * 100}%`,
  };
};
