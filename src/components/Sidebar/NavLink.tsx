import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLink extends LinkProps {
  title: string;
  icon: ElementType;
}

export const NavLink: React.FC<INavLink> = ({ title, icon, ...rest }) => {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize={20} />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
};
