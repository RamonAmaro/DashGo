import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { RiNotificationLine, RiSearch2Line, RiUser2Line } from "react-icons/ri";

export const Header: React.FC = () => {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        DashGo{" "}
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearch2Line} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} size={20} />
          <Icon as={RiUser2Line} size={20} />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text> Ramon da Cruz Amaro </Text>
            <Text color="gray.300" fontSize="small">
              ramonamaro.dev@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Ramon Amaro"
            src="https://github.com/RamonAmaro.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
