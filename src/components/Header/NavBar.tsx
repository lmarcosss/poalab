import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Image,
  useBreakpointValue,
  Stack,
  Link,
  Text,
} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';

const ITEMS = [
  {
    title: 'O que é?',
    anchor: '#what-is',
  },
  {
    title: 'Espaço',
    anchor: '#work-space',
  },
  {
    title: 'Equipamentos',
    anchor: '#equipments',
  },
  {
    title: 'Links úteis',
    anchor: '#links',
  },
  {
    title: 'Contato',
    anchor: '#contact',
  },
];

export function NavBar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>
              {/* <Logo lightTheme containerProps={{ justify: 'flex-start' }} /> */}
              <Text color="white">Navegação</Text>
            </DrawerHeader>
            <DrawerBody></DrawerBody>
            <DrawerFooter justifyContent="center">
              <Image w="24" src="/images/ifrs-dark-theme.svg" />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Stack flex="4" display="flex" direction="row" spacing="8">
      {ITEMS.map((item, index) => (
        <Link key={index} href={item.anchor}>
          {item.title}
        </Link>
      ))}
    </Stack>
  );
}
