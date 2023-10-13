import { Box, Flex, Icon } from "@chakra-ui/react";
import { GiClown } from "react-icons/gi";
import React, { useRef, useState } from "react";

const Troll = () => {
  const container = useRef();
  const [iconPosition, setIconPosition] = useState({ top: "50%", left: "50%" });
  const [circles, setCircles] = useState([]);

  const manageMouseMove = (event) => {
    const { clientX, clientY } = event;
    const containerPosition = container.current.getBoundingClientRect();
    const x = clientX - containerPosition.left;
    const y = clientY - containerPosition.top;
    setIconPosition({ top: y + "px", left: x + "px" });
    draw(x, y);
  };

  const draw = (x, y) => {
    const newCircle = { top: y + "px", left: x + "px" };
    setCircles((prevCircles) => {
      return [...prevCircles, newCircle];
    });
    if (circles.length > 25) {
        circles.shift(); // Remove the oldest circle when exceeding the limit
      } else {
        setTimeout(() => {
            circles.shift()
        }, 150)
      }
  };

  return (
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
          zIndex="2"
          top={iconPosition.top}
          left={iconPosition.left}
          transform="translate(-50%, -50%)"
        />
      </Flex>
    </Flex>
  );
};

export default Troll;
