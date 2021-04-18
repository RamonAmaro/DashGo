import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProfileProps {
  showProfileData?: boolean;
}

export const Profile: React.FC<IProfileProps> = ({
  showProfileData = true,
}) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text> Ramon da Cruz Amaro </Text>
          <Text color="gray.300" fontSize="small">
            ramonamaro.dev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Ramon Amaro"
        src="https://github.com/RamonAmaro.png"
      />
    </Flex>
  );
};
