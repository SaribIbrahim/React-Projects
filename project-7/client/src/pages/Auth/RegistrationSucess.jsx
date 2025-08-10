import {  VStack,Icon,Text, Button,Box, Center } from '@chakra-ui/react'
import {BsPatchCheckFill} from "react-icons/bs"
import Card from "../../components/Card.jsx"
import { Link } from "react-router-dom";
    

function RegistrationSucess() {
  return (
    <Center height={"100vh"}>
          <Card >
              <VStack spacing={6}>
                  <Icon as={BsPatchCheckFill} boxSize={"48px"} color={"green"} />
                  <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>Registration Successful</Text>
                  <Text textStyle={"p2"} color={"black.60"} textAlign={"center"}>Hurray! You have successfully created your account. Enter the app to explore all it’s features.
                  </Text>
                  <Box>
                      <Link to={"/signin"}>
                          <Button w={"full"} >
                              Enter App
                          </Button>
                      </Link>
                  </Box>
              </VStack>

          </Card>
      </Center>
  )
}

export default RegistrationSucess