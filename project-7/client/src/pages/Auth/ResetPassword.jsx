import { Icon, Text, Button, Center, Stack, FormControl, FormLabel, Input,  FormErrorMessage,useToast,Spinner } from '@chakra-ui/react'
import Card from "../../components/Card.jsx"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation} from 'react-query';
import { useNavigate,useParams } from 'react-router-dom';
import { verifyForgotToken } from '../../api/query/userQuery.js';


function ResetPassword() {

   const toast = useToast();
      const { token } = useParams()
      const navigate=useNavigate()
  
      const { mutate,isLoading } = useMutation({
          mutationKey: ['verify-forgot-token'],
          mutationFn: verifyForgotToken,
          enabled: !!token,
          onError: (error) => {
              toast({
                  title: "Signup Error",
                  description: error.message,
                  status: "error"
              })
              navigate("/signup")
          },
          onSuccess:()=>{
              navigate("/reset-password-success")
          }
      })
  

   const validationSchema = Yup.object({
      password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        repeatpassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Passwords must match")
          .required("Repeat password is required")
    });
  
  
    const {
      handleBlur, handleChange, handleSubmit, values, touched, errors } = useFormik({
        initialValues: {
          password: '',
          repeatpassword: '',
        },
        validationSchema,
        onSubmit: (values ) => {
          console.log("Form submitted:", values)
          mutate({token,password:values.password})
          // resetForm();
  
        },
      });

       if (isLoading) {
          return <Center h={"100vh"}>
              <Spinner />
          </Center>
      }
  

  return (
     <Center height={"100vh"}>
      <Card>
        <Text textStyle={"h1"}>Reset Password</Text>
        <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
          Enter your new password.
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack mt={"8"} spacing={"6"}>


            {/* Password */}
            <FormControl isInvalid={touched.password && !!errors.password}>
              <FormLabel htmlFor="password">New Password</FormLabel>
              <Input
                name="password"
                type='password'
                placeholder="Enter New Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={touched.repeatpassword && !!errors.repeatpassword}>
              <FormLabel htmlFor="repeatpassword">Repeat New Password</FormLabel>
              <Input
                name="repeatpassword"
                type='password'
                placeholder="Repeat New Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatpassword}
              />
              <FormErrorMessage>{errors.repeatpassword}</FormErrorMessage>
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

export default ResetPassword