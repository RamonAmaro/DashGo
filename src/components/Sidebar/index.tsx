import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiUserLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const Sidebar: React.FC = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink title="Dashboard" icon={RiDashboardLine} />
          <NavLink title="Usuários" icon={RiUserLine} />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink title="Formulários" icon={RiGitMergeLine} />
          <NavLink title="Automação" icon={RiInputMethodLine} />
        </NavSection>
      </Stack>
    </Box>
  );
};
