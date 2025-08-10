
import {
   Container, Center, Text, Stack,
  FormControl, FormLabel, Input, Flex, Checkbox, Button, FormErrorMessage,useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Card from "../../components/Card.jsx"
import { useMutation } from 'react-query';
import { signUpUser } from '../../api/query/userQuery.js';
import { useState } from "react";



const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required"),
  lastName: Yup.string()
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
  const [email,setEmail]=useState("")// for sending email data to email verification page
  const navigate=useNavigate();//to navigate to email verification page
  const toast=useToast();

  const { mutate,isLoading}=  useMutation({
      mutationKey:["signup"],// unique key to identify the mutation
      mutationFn:signUpUser,// function to call the API
      onSuccess:(data)=>{
      if(email!=""){
        navigate("/email-verification",{
        state:{email}// email conatains value of email from form
      })// navigate to email verification page with email data as state
      }
      },
      onError:(error)=>{
        toast({
          title:"Signup Error",
          description:error.message,
          status:"error"
        })
      }  
    })
  
  const {
    handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatpassword: '',
    },
    validationSchema,
    onSubmit: (values,{resetForm}) => {
      setEmail(values.email);//passing mail value in form to setter function of email
      mutate({
        firstName:values.firstName,
        lastName:values.lastName,
        email:values.email,
        password:values.password
      },
       {
    onSuccess: () => {
      navigate("/email-verification", { state: { email: values.email } });
    }
  }
    );// call the mutation function with the form values
      
      resetForm();
      
    },
  });
  

  return (
    <Container>
      <Center minH={"100vh"}>
        <Card>
          <Text textStyle={"h1"}>Welcome to CryptoApp</Text>
          <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
            Create a free account by filling data below
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack mt={"10"} spacing={"6"}>
              {/* Name + Lastname */}
              <Flex gap={"6"} flexDir={{ base: "column", sm: "row" }}>
                <FormControl isInvalid={touched.firstName && !!errors.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    name="firstName"
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={touched.lastName && !!errors.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
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
              <Button isLoading={isLoading} type="submit" colorScheme="purple">
                Create an account
              </Button>

              {/* Link */}
              <Flex justify={"center"}>
                <Text textStyle={"p3"}>
                  Already have an account?
                  <Link to="/signin">
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
