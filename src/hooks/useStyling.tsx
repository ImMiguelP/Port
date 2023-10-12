// useStyling.js
import { useState } from 'react';
import { useIsMobile } from './useIsMobile';

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
  const isMobile = useIsMobile()
  const zoomEffect = {
    _hover: {
      bg: "transparent",
      transform: isMobile ? "scale(1.10)" : "scale(1.15)",
    },
    transition: "all 0.3s ease-in-out",
  };

  return zoomEffect;
};
