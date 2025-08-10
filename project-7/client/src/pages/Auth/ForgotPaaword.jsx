import { Icon, Text, Button, Center, Stack, FormControl, FormLabel, Input,  FormErrorMessage } from '@chakra-ui/react'
import Card from "../../components/Card.jsx"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function ForgotPaaword() {

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
      onSubmit: (values, { resetForm }) => {
        console.log("Form submitted:", values);
        setForgotData(values);
        resetForm();

      },
    });

  const [forgotData, setForgotData] = useState({});

  return (
    <Center height={"100vh"}>
      <Card>
        <Link to={"/signin"} >
          <Icon as={FaArrowLeftLong } boxSize={"24px"} mb={4}/>
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
                placeholder="Enter Your Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <Button w={"full"} type='submit'>
              Reset Password
            </Button>
          </Stack>
        </form>
      </Card>
    </Center>
  )
}

export default ForgotPaaword