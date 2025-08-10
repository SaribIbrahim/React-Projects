import Card from "../../components/Card.jsx"
import { VStack, Icon, Text, Button, Box, Center, Container } from '@chakra-ui/react'
import { BsPatchCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom";

function ResetPasswordSuccess() {
  return (
     <Container>
            <Center height={"100vh"}>
                <Card p={{ base: "4", md: "10" }} showCard={true}  >
                    <VStack spacing={6}>
                        <Icon as={BsPatchCheckFill} boxSize={"48px"} color={"green"} />
                        <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>Password Reset Done</Text>
                        <Text textStyle={"p2"} color={"black.60"} textAlign={"center"}>Now you can access you account. 
                        </Text>
                        <Box w={"full"}>
                            <Link to={"/signin"}>
                                <Button w={"full"} >
                                    Sign In
                                </Button>
                            </Link>
                        </Box>
                    </VStack>

                </Card>
            </Center>
        </Container>
  )
}

export default ResetPasswordSuccess