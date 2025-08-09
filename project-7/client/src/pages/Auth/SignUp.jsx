import React, { useState } from 'react';
import {
  Card, Container, Center, Text, Stack,
  FormControl, FormLabel, Input, Flex, Checkbox, Button, FormErrorMessage
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  name: Yup.string()
    .required("First name is required"),
  lastname: Yup.string()
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Repeat password is required"),
});

function SignUp() {
  const {
    handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      repeatpassword: '',
    },
    validationSchema,
    onSubmit: (values,{resetForm}) => {
      console.log("Form submitted:", values);
      setformData(values);
      resetForm();
      
    },
  });

  const [formData,setformData]=useState({});
  

  return (
    <Container>
      <Center minH={"100vh"}>
        <Card borderRadius={"16px"} p={6} w="456px">
          <Text textStyle={"h1"}>Welcome to CryptoApp</Text>
          <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
            Create a free account by filling data below
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack mt={"10"} spacing={"6"}>
              {/* Name + Lastname */}
              <Flex gap={"6"} flexDir={{ base: "column", sm: "row" }}>
                <FormControl isInvalid={touched.name && !!errors.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={touched.lastname && !!errors.lastname}>
                  <FormLabel htmlFor="lastname">Last Name</FormLabel>
                  <Input
                    name="lastname"
                    placeholder="Enter Your Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                  />
                  <FormErrorMessage>{errors.lastname}</FormErrorMessage>
                </FormControl>
              </Flex>

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

              {/* Repeat Password */}
              <FormControl isInvalid={touched.repeatpassword && !!errors.repeatpassword}>
                <FormLabel htmlFor="repeatpassword">Repeat Password</FormLabel>
                <Input
                  name="repeatpassword"
                  type='password'
                  placeholder="Repeat Your Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatpassword}
                />
                <FormErrorMessage>{errors.repeatpassword}</FormErrorMessage>
              </FormControl>

              {/* Checkbox */}
              <Checkbox mt={"4"}>
                <Text textStyle={"p3"}>
                  I agree with
                  <Text as="span" color={"p.purple"}> Terms & Conditions</Text>
                </Text>
              </Checkbox>

              {/* Submit Button */}
              <Button type="submit" colorScheme="purple">
                Create an account
              </Button>

              {/* Link */}
              <Flex justify={"center"}>
                <Text textStyle={"p3"}>
                  Already have an account?
                  <Link to="/sign-in">
                    <Text as="span" color={"p.purple"}> Sign In</Text>
                  </Link>
                </Text>
              </Flex>
            </Stack>
          </form>
        </Card>
      </Center>
    </Container>
  );
}

export default SignUp;
