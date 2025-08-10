import { VStack, Icon, Text, Button, Box, Center, Container, useToast, Spinner } from '@chakra-ui/react'
import { useQuery } from 'react-query';
import { BsPatchCheckFill } from "react-icons/bs"
import Card from "../../components/Card.jsx"
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyEmailAddressSignup } from '../../api/query/userQuery.js';


function RegistrationSucess() {
    const toast = useToast();
    const { token } = useParams()
    const navigate=useNavigate()

    const { isLoading, isSuccess } = useQuery({
        queryKey: ['verify-email-token'],
        queryFn: () => verifyEmailAddressSignup({ token }),
        enabled: !!token,
        onError: (error) => {
            toast({
                title: "Signup Error",
                description: error.message,
                status: "error"
            })
            navigate("/signup")
        }
    })

    if (isLoading) {
        return <Center h={"100vh"}>
            <Spinner />
        </Center>
    }


    return (
        <Container>
            <Center height={"100vh"}>
                {
                    isSuccess && (
                        <Card p={{ base: "4", md: "10" }} showCard={true}  >
                            <VStack spacing={6}>
                                <Icon as={BsPatchCheckFill} boxSize={"48px"} color={"green"} />
                                <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>Registration Successful</Text>
                                <Text textStyle={"p2"} color={"black.60"} textAlign={"center"}>Hurray! You have successfully created your account. Enter the app to explore all it’s features.
                                </Text>
                                <Box w={"full"}>
                                    <Link to={"/signin"}>
                                        <Button w={"full"} >
                                            Enter App
                                        </Button>
                                    </Link>
                                </Box>
                            </VStack>

                        </Card>
                    )
                }
            </Center>
        </Container>
    )
}

export default RegistrationSucess