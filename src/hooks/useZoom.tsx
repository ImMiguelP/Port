

const useZoom = () => {
  
  const hoverEffect = {
    _hover: {
      bg: "transparent",
      transform: "scale(1.1)",
    },
    transition: "all 0.3s ease-in-out",
  };

  return hoverEffect;
};

export default useZoom;