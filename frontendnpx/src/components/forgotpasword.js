import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Box,
    Flex,
    Heading,
    Text,
  } from '@chakra-ui/react';
  
  export const Forgotpage = () => {
    return (
      <Flex
        align="center"
        justify="center"
        h="100vh"
        bg="gray.100"
      >
        <Box
          p={8}
          maxW="md"
          borderWidth={1}
          borderRadius="lg"
          bg="white"
          shadow="md"
        >
          <Heading as="h1" size="lg" mb={6} textAlign="center">
            Forgot Password
          </Heading>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
  
          <FormControl id="password" mb={6}>
            <FormLabel>New Password</FormLabel>
            <Input type="password" placeholder="Reset your password" />
          </FormControl>
  
          <Button colorScheme="blue" width="full">
            Send OTP
          </Button>
        </Box>
      </Flex>
    );
  };
  