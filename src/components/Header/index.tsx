import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { Logo } from './Logo';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { NavBar } from './NavBar';

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
      h={['16', '20']}
      position="fixed"
      top="0"
      zIndex="99"
      background="gray.700"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          color="white"
          onClick={onOpen}
        />
      )}

      <Flex w="100%" justify="center" align="center">
        <Logo />
        <NavBar />
      </Flex>
    </Flex>
  );
}
