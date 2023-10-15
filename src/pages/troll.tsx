import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { GiClown } from "react-icons/gi";
import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Circle {
  top: string;
  left: string;
}

const Troll: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [iconPosition, setIconPosition] = useState<Circle>({
    top: "50%",
    left: "50%",
  });
  const [circles, setCircles] = useState<Circle[]>([]);

  const isMobile = useIsMobile();

  const manageMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    if (container.current) {
      const containerPosition = container.current.getBoundingClientRect();
      const x = clientX - containerPosition.left;
      const y = clientY - containerPosition.top;
      setIconPosition({ top: y + "px", left: x + "px" });
      draw(x, y);
    }
  };

  const draw = (x: number, y: number) => {
    const newCircle = { top: y + "px", left: x + "px" };
    setCircles((prevCircles) => {
      if (prevCircles.length > 25) {
        prevCircles.shift();
      }
      return [...prevCircles, newCircle];
    });
  };

  useEffect(() => {
    const clearCirclesTimeout = setTimeout(() => {
      setCircles([]);
    }, 1500);

    return () => {
      clearTimeout(clearCirclesTimeout);
    };
  }, [circles]);

  return isMobile ? (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Heading>This ft is for desktop only sorry ;p</Heading>
    </Flex>
  ) : (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        ref={container}
        onMouseMove={(e) => manageMouseMove(e)}
        h="700px"
        w="1000px"
        pos="relative"
        overflow="hidden"
        border="4px solid black"
        backgroundColor="blue"
        justifyContent="center"
        alignItems="center"
      >
        {circles.map((circle, index) => (
          <Box
            key={index}
            width="160px"
            height="160px"
            borderRadius="50%"
            backgroundColor="white"
            border="4px solid black"
            position="absolute"
            transform="translate(-50%, -50%)"
            top={circle.top}
            left={circle.left}
          />
        ))}
        <Icon
          as={GiClown}
          boxSize="160px"
          color="red"
          pos="absolute"
          zIndex={2}
          top={iconPosition.top}
          left={iconPosition.left}
          transform="translate(-50%, -50%)"
        />
      </Flex>
    </Flex>
  );
};

export default Troll;
