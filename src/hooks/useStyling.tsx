// useStyling.js
import { useState } from 'react';

export const useHoverOpacity = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
  };
}

export const useZoom = () => {
  const zoomEffect = {
    _hover: {
      bg: "transparent",
      transform: "scale(1.15)",
    },
    transition: "all 0.3s ease-in-out",
  };

  return zoomEffect;
};
