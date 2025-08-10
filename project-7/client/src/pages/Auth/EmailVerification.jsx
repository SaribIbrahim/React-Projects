import Card from "../../components/Card.jsx"
import { VStack, Icon, Text, Button, Box, Center, Container, useToast, Spinner } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md"
import { useParams } from "react-router-dom"
import { useMutation } from "react-query"
import { sendVerificationMail } from "../../api/query/userQuery.js"
import { useEffect } from "react"

function EmailVerification() {

    const toast = useToast();
    const {email}=useParams();
    
    const {  isLoading, mutate } = useMutation({
        mutationKey: ["send-verification-mail"],
        mutationFn: () => sendVerificationMail({ email }),// function to call the API
        onSettled: (data) => {
            console.log(data);
        },
        onError: (error) => {
            toast({
                title: "Signup Error",
                description: error.message,
                status: "error"
            })
        },
        enabled: !!email,
    })

    useEffect(() => {
        mutate({ email })
    }, [email])

    if (email === "") {
        return <Center h={"100vh"}>Invalid Email</Center>
    }


    return (
        <Container>
            <Center height={"100vh"}>
                <Card p={{ base: "4", md: "10" }} showCard={true}  >
                    <VStack spacing={6}>
                        <Icon as={MdEmail} boxSize={"48px"} color={"p.purple"} />
                        <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>Email Verification</Text>
                        <Text textStyle={"p2"} color={"black.60"} textAlign={"center"}>Email Verification
                            We have sent you an email verification to <Box as={"b"} color={"p.black"}>{email}</Box>. If you didn’t receive it, click the button below.
                        </Text>
                        <Button variant={"outline"} w={"full"} onClick={() => mutate({ email })} isLoading={isLoading} >
                            Re-Send Email
                        </Button>
                    </VStack>

                </Card>

            </Center>
        </Container>
    )
}

export default EmailVerification