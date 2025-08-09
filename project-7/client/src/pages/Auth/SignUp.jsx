import React from 'react'
import { Card,Container,Center,Text,Heading } from "@chakra-ui/react"

function SignUp() {
    return (
        <Container>
            <Center minH={"100vh"}>
                <Card borderRadius={"16px"} p={6} w="408px"  >
                    <Text textStyle={"h1"}>Welcome to Crypto</Text>
                    <Text textStyle={"p2"} color={"black.60"}>Welcome to Crypto</Text>
                </Card>
            </Center>
        </Container>
    )
}

export default SignUp