import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiUserLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SidebarNav: React.FC = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink title="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink title="Usuários" icon={RiUserLine} href="/users" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Formulários" icon={RiGitMergeLine} href="/forms" />
        <NavLink
          title="Automação"
          icon={RiInputMethodLine}
          href="/automation"
        />
      </NavSection>
    </Stack>
  );
};
