import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProps {
  children?: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProps) => {
  const discClosure = useDisclosure();

  const { asPath } = useRouter();

  useEffect(() => {
    discClosure.onClose();
  }, [asPath]);

  return (
    <SidebarDrawerContext.Provider value={discClosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
