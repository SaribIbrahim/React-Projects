import React from 'react'
import { Heading, Menu, MenuButton, MenuList, MenuItem, Button, HStack, Box, Icon } from '@chakra-ui/react'
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from '../hooks/useAuth';

function TopNav({ title,onOpen }) {
    
    const {logout}=useAuth();

    return (

        <Box  bg="white">
            <HStack fontWeight="medium" h="64px" maxW="70rem" justify="space-between" mx="auto ">
                <Icon as={GiHamburgerMenu} onClick={onOpen} fontSize="24px" display={{
                    base: "flex",
                    lg: "none"
                }} />
                <Heading fontSize="28px">{title}</Heading>
                <Menu>
                    <MenuButton >
                        <Icon as={FaCircleUser} fontSize="24px" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>

    )
}

export default TopNav