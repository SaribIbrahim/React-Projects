import React from 'react'
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import SideDrawer from './SideDrawer'

function DashboardLayout({title,children}) {

    const {isOpen,onClose,onOpen}=useDisclosure()

  return (
    <div>
        <Flex>
          <Box display={{ base: "none", lg: "block" }}>
            <SideNav />
          </Box>
          <Box flexGrow={1}>
            <TopNav title={title} onOpen={onOpen} />
            <SideDrawer isOpen={isOpen} onClose={onClose} />
            <Container maxW="70rem" bgColor="red.400">{children}</Container>
          </Box>
        </Flex>
    </div>
  )
}

export default DashboardLayout