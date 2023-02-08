import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/client-app";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  return (
    <Flex direction="column" w="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" height="20px" />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other provider</Button>
      {error && (
        <Text fontSize="10pt" color="red.500" textAlign="center">
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
