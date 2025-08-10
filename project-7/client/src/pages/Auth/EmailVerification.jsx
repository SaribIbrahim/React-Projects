
import Card from "../../components/Card.jsx"
import {  VStack,Icon,Text, Button,Box, Center } from '@chakra-ui/react'
import {MdEmail} from "react-icons/md"



function EmailVerification() {
  return (
      <Center height={"100vh"}>
          <Card >
              <VStack spacing={6}>
                  <Icon as={MdEmail} boxSize={"48px"} color={"p.purple"} />
                  <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>Email Verification</Text>
                  <Text textStyle={"p2"} color={"black.60"} textAlign={"center"}>Email Verification
                      We have sent you an email verification to <Box as={"b"} color={"p.black"}>jenny.wilson@gmail.com</Box>. If you didn’t receive it, click the button below.
                  </Text>
                  <Button variant={"outline"} w={"full"} >
                      Re-Send Email
                  </Button>
              </VStack>

          </Card>
      </Center>
  )
}

export default EmailVerification