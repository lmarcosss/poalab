import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { NavBar } from "./NavBar";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h={["16", "20"]}
      maxWidth={1480}
      mx="auto"
      align="center"
      justify="center"
      px="6"
    >
      <NavBar />
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
        />
      )}
      <Logo />
    </Flex>
  );
}
