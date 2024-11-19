import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaUserCircle, FaOpencart } from 'react-icons/fa';
import Logo from "../../assets/logo.jpg";

// Définition des liens pour la barre de navigation
const Links = [
  { name: 'Accueil', path: '/' },
  { name: 'Service', path: '/explore' },
  { name: 'Habitats', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

// Composant pour les liens de navigation
const NavLink = ({ path, children }) => (
  <Box
    as={RouterLink}
    to={path}
    px={3}
    py={2}
    rounded={'md'}
    fontWeight="bold"
    transition="all 0.2s ease-in-out"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      transform: 'translateY(-2px)',
    }}
  >
    {children}
  </Box>
);

// Composant principal pour la barre de navigation
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Gestion de l'ouverture/fermeture du menu mobile

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={6} boxShadow="md">
      {/* Section principale de la barre de navigation */}
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Bouton pour le menu mobile */}
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Toggle Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
        />

        <HStack spacing={8} alignItems={'center'} w="full" justify="space-between">
          {/* Section du logo */}
          <Box>
            <RouterLink to="/">
              <img src={Logo} alt="logo" style={{ height: '50px' }} />
            </RouterLink>
          </Box>

          {/* Liens de navigation centraux */}
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            w="full"
            justify="center"
          >
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>

          {/* Section pour le profil et le panier */}
          <Flex alignItems={'center'}>
            <Menu>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>

      {/* Menu mobile */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
