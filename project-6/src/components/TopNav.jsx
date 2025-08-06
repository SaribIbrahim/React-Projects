import React from 'react'
import { Flex, Heading, Menu, MenuButton, MenuList, MenuItem, Button, HStack, Box, Icon } from '@chakra-ui/react'
import { FaCircleUser } from "react-icons/fa6";

function TopNav({ title }) {
    return (

        <Box>
            <HStack fontWeight="medium" h="64px" maxW="70rem" justify="space-between" mx="auto">
                <Heading fontSize="28px">{title}</Heading>
                <Menu>
                    <MenuButton >
                        <Icon as={FaCircleUser} fontSize="24px" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>

    )
}

export default TopNav