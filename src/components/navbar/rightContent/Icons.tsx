import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const Icons = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Flex
          mr={1.5}
          ml={1.5}
          p={1}
          cursor="pointer"
          borderRadius={4}
          color="gray.500"
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>

        <Flex
          mr={1.5}
          ml={1.5}
          p={1}
          cursor="pointer"
          borderRadius={4}
          color="gray.500"
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoFilterCircleOutline} fontSize={22} />
        </Flex>

        <Flex
          mr={1.5}
          ml={1.5}
          p={1}
          cursor="pointer"
          borderRadius={4}
          color="gray.500"
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoVideocamOutline} fontSize={22} />
        </Flex>

        <Flex
          mr={1.5}
          ml={1.5}
          p={1}
          cursor="pointer"
          borderRadius={4}
          color="gray.500"
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
      </Flex>
      <>
        <Flex
          mr={1.5}
          ml={1.5}
          p={1}
          cursor="pointer"
          borderRadius={4}
          color="gray.500"
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsChatDots} fontSize={20} />
        </Flex>

        <Flex
          mr={1.5}
          ml={1.5}
          p={1}
          cursor="pointer"
          borderRadius={4}
          color="gray.500"
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoNotificationsOutline} fontSize={20} />
        </Flex>

        <Flex
          mr={1.5}
          ml={1.5}
          p={1}
          cursor="pointer"
          borderRadius={4}
          color="gray.500"
          _hover={{ bg: "gray.200" }}
          display={{ base: "none", md: "flex" }}
        >
          <Icon as={GrAdd} fontSize={20} />
        </Flex>
      </>
    </Flex>
  );
};

export default Icons;
