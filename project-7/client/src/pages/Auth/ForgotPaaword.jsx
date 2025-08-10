import { Icon, Text, Button, Center, Stack, FormControl, FormLabel, Input, FormErrorMessage, useToast } from '@chakra-ui/react'
import Card from "../../components/Card.jsx"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { sendForgotMail } from '../../api/query/userQuery.js';
import { useState } from 'react';



function ForgotPaaword() {

  const [email, setEmail] = useState("")
  const toast = useToast()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationKey: ["forgot-mail"],
    mutationFn: sendForgotMail,// function to call the API
    onSuccess: (data, variables) => {
  navigate(`/forgot-password-sent/${variables.email}`)
}  
    ,
    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error"
      })
    }
  })

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
  });


  const {
    handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
      initialValues: {
        email: '',
      },
      validationSchema,
      onSubmit: (values) => {
        console.log("Form submitted:", values);
        setEmail((prev) => (prev = values.email))
        mutate({ email: values.email })
        // resetForm();

      },
    });



  return (
    <Center height={"100vh"}>
      <Card>
        <Link to={"/signin"} >
          <Icon as={FaArrowLeftLong} boxSize={"24px"} mb={4} />
        </Link>
        <Text textStyle={"h1"}>Forgot Password</Text>
        <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
          Enter your email address for which account you want to reset your password.
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack mt={"8"} spacing={"6"}>


            {/* Password */}
            <FormControl isInvalid={touched.email && !!errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                name="email"
                type='email'
                placeholder="Enter Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <Button w={"full"} type='submit' isLoading={isLoading}>
              Reset Password
            </Button>
          </Stack>
        </form>
      </Card>
    </Center>
  )
}

export default ForgotPaaword