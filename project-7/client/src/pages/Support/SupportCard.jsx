import React from 'react'
import { Flex, Stack, Icon, Text, Card, HStack, FormControl, FormLabel, Input, Textarea, Checkbox, Box, Button } from '@chakra-ui/react'
import { IoMdMail } from "react-icons/io";



function SupportCard() {
    return (
        <Flex gap={3}flexDir={{base:"column",xl:"row"}} >
            <Stack maxW={"380px"}>
                <Icon as={IoMdMail} boxSize={6} color={"p.purple"} />
                <Text as={"h1"} textStyle={"h1"} fontWeight={"md"}>Contact Us</Text>
                <Text fontSize={"sm"} color={"black.60"}>Have a question or just want to know more? Feel free to reach out to us</Text>
            </Stack>
            <Card p={6} borderRadius={"lg"}flexGrow={1} >
                <Stack spacing={6}>
                    <Text fontSize={"sm"} fontWeight={"medium"} >You will receive response within 24 hours.</Text>
                    <HStack flexDir={{base:"column",md:"row"}}>
                        <FormControl>
                            <FormLabel htmlFor="firstname">First Name</FormLabel>
                            <Input id="firstname" placeholder="Enter Your First Name" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="lastname">Last Name</FormLabel>
                            <Input id="lastname" placeholder="Enter Your Last Name" />
                        </FormControl>
                    </HStack>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" placeholder="Enter Your Email" />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea id="message" placeholder="Enter Your Message" />
                    </FormControl>
                    <Checkbox >
                        <Text fontSize={"xs"}>
                            I agree to the
                            <Box color={"p.purple"} as={"span"}> Terms & Conditions</Box>
                        </Text>
                    </Checkbox>
                    <Stack>
                        <Button fontSize={"sm"}>Send a message</Button>
                        <Button colorScheme='gray' fontSize={"sm"}>Book a meeting</Button>
                    </Stack>
                </Stack>
            </Card>
        </Flex>
    )
}

export default SupportCard