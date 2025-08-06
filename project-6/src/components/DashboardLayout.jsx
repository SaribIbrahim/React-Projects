import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'

function DashboardLayout({title,children}) {
  return (
    <div>
        <Flex>
          <SideNav />
          <Box flexGrow={1}>
            <TopNav title={title} />
            <Container maxW="70rem" bgColor="red.400">{children}</Container>
          </Box>
        </Flex>
    </div>
  )
}

export default DashboardLayout