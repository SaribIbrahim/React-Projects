import React, { useState } from 'react';
import {
   Container, Center, Text, Stack,
  FormControl, FormLabel, Input, Flex, Checkbox, Button, FormErrorMessage,
  HStack,Box
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Card from "../../components/Card.jsx"

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});

function SignIn() {
  const {
    handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {

      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values,{resetForm}) => {
      console.log("Form submitted:", values);
      setSignInData(values);
      resetForm();
      
    },
  });

  const [signInData,setSignInData]=useState({});
  

  return (
    <Container>
      <Center minH={"100vh"}>
        <Card>
          <Text textStyle={"h1"}>Welcome to CryptoApp</Text>
          <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
            Enter your credentials to access the account
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack mt={"10"} spacing={"6"}>

              {/* Email */}
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

              {/* Password */}
              <FormControl isInvalid={touched.password && !!errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  name="password"
                  type='password'
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              {/* Checkbox */}
              <HStack justify={"space-between"} align={"center"} mt={"4"}>
                <Checkbox >
                <Text textStyle={"p3"}>
                  Remember me
                </Text>
              </Checkbox>
              
              <Link to={"/forgot-password"}>
                <Text as="span" color={"p.purple"} textStyle={"p3"}>Forgot Password ?</Text>
              </Link>
              </HStack>

              <Box>
                <Button type="submit" colorScheme="purple" w={"full"}>Login</Button>
                <Link to={"/signup"}>
                  <Button w={"full"} mt={3} variant={"outline"}>
                    Create Account
                  </Button>
                </Link>
              </Box>

            </Stack>
          </form>
        </Card>
      </Center>
    </Container>
  );
}

export default SignIn;
