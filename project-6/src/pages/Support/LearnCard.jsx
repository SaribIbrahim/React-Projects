import React from 'react'
import { Flex, Stack, Icon, Text,Tag } from '@chakra-ui/react'
import { IoChatbubbleSharp } from "react-icons/io5";
import { CustomCard } from '../../chakra/CustomCard'


function LearnCard() {
  return (
    <Flex gap={{base:"8px",xl:"54px"}}flexDir={{base:"column",xl:"row"}} mt={10} >
                <Stack maxW={"380px"}>
                    <Icon as={IoChatbubbleSharp} boxSize={6} color={"p.purple"} />
                    <Text as={"h1"} textStyle={"h1"} fontWeight={"md"}>Live Chat</Text>
                    <Text fontSize={"sm"} color={"black.60"}>Don't have time to wait for answer? Chat with us now.</Text>
                </Stack>
                <CustomCard p={"5"} mb={{base:"1",md:"4"}} bg={'p.purple'} flexGrow={1} >
                        <Tag bg={'white'} color={ 'p.purple'} mb={4}>Chatbot</Tag>
                        <Text textStyle={"h5"} fontSize={"18px"} color={ 'white'} fontWeight={"medium"}>
                            Chat with us now
                        </Text>
                    </CustomCard>
            </Flex>
  )
}

export default LearnCard