import {
  Box, Button, Card, CardBody, FormControl,
  FormHelperText,
  FormLabel,
  Input, VStack
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Api } from "../actions/api";

export const SignUp = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [phone, setPhone] = useState()
  const [name, setName] = useState()

  const Signup = async () => {
      await axios.post(Api+"/signup",{email,password,phone,name})
      .then((res)=>{
          if(res.data.message==="user already Exits"){
              console.log(res?.data?.values)
              alert(res.data.message)
          } else {
              alert(res.data.message)
              window.location.href="/signin"
          }
      })
      .catch((e)=>console.log(e))
  }
  

  return (
      <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="gray.50"
      >
          <Card
              width="400px"
              boxShadow="lg"
              p={6}
              borderRadius="md"
          >
              <CardBody>
                  <VStack spacing={4} align="stretch">
                      <h1>Signup With your Details</h1>
                      <FormControl id="name">
                          <FormLabel>Name</FormLabel>
                          <Input type="text" focusBorderColor="teal.500" onChange={(e) => setName(e.target.value)} />
                      </FormControl>

                      <FormControl id="email">
                          <FormLabel>Email address</FormLabel>
                          <Input type="email" focusBorderColor="teal.500" onChange={(e) => setEmail(e.target.value)} />
                          <FormHelperText>We'll never share your email.</FormHelperText>
                      </FormControl>

                      <FormControl id="password">
                          <FormLabel>Password</FormLabel>
                          <Input type="password" focusBorderColor="teal.500" onChange={(e) => setPassword(e.target.value)} />
                          <FormHelperText>We'll never share your password.</FormHelperText>
                      </FormControl>

                      <FormControl id="number">
                          <FormLabel>Phone number</FormLabel>
                          <Input type="number" focusBorderColor="teal.500" onChange={(e) => setPhone(e.target.value)} />
                      </FormControl>

                      <Button colorScheme="teal" size="lg" mt={4} onClick={Signup}>Sign Up</Button>
                      <p>Already have an Account? <a href="Signin">Signin</a></p>
                  </VStack>
              </CardBody>
          </Card>
      </Box>
  )
}