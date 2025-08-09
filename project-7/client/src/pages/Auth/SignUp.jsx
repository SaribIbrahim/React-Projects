import React from 'react'
import { Card,Container,Center,Text,Stack, FormControl,FormLabel,Input,Flex, Checkbox,Button } from "@chakra-ui/react"
import {Link} from "react-router-dom"


function SignUp() {
    return (
        <Container>
            <Center minH={"100vh"}>
                <Card borderRadius={"16px"} p={6} w="456px"  >
                    <Text textStyle={"h1"}>Welcome to Crypto</Text>
                    <Text textStyle={"p2"} color={"black.60"} mt={"4"}>Create a free account by filling data below</Text>
                    <Stack mt={"10"} spacing={"6"}>
                        <Flex gap={"6"} flexDir={{ base: "column", sm: "row" }} >
                            <FormControl>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input name="name" placeholder="Enter Your name"  />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="lastname">Last Name</FormLabel>
                                <Input name="lastname" placeholder="Enter Your Last Name" />
                            </FormControl>
                        </Flex>
                        <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input name="email" type='email' placeholder="Enter Your Email" />
                        </FormControl>
                        <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input name="password" type='password' placeholder="Enter Your Password" />
                        </FormControl>
                         <FormControl>
                                <FormLabel htmlFor="repeat-password">Repeat Password</FormLabel>
                                <Input name="repeat-password" type='password' placeholder="Enter Your Repeat Password" />
                        </FormControl>
                        <Checkbox mt={"4"}>
                            <Text textStyle={"p3"}>
                                I agree with
                                <Text as="span" color={"p.purple"}> Terms & Conditions</Text>
                            </Text>
                        </Checkbox>
                        <Button>Create an account</Button>
                        <Flex justify={"center"}>
                            <Text textStyle={"p3"}>Already have an account?
                            <Link to="/sign-in"> 
                                <Text as="span" color={"p.purple"}> Sign In</Text>
                            </Link>
                        </Text>
                        </Flex>
                    </Stack>
                </Card>
            </Center>
        </Container>
    )
}

export default SignUp