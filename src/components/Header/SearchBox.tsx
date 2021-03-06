import { Flex, Icon, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";

interface ISearchBox {
  isWadeVersion?: boolean;
}

export const SearchBox: React.FC<ISearchBox> = ({ isWadeVersion }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {isWadeVersion && (
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
            ref={searchInputRef}
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar na plataforma"
            _placeholder={{ color: "gray.400" }}
          />
          <Icon as={RiSearch2Line} fontSize="20" />
        </Flex>
      )}
    </>
  );
};
