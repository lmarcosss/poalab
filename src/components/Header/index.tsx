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
      background="#fff"
      align="center"
      boxShadow="0 3px 5px rgba(57, 63, 72, 0.3)"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
        />
      )}
      <Logo containerProps={{ ml: [0, 0, 0, '40'], flex: 1 }} />
      <NavBar />
    </Flex>
  );
}
