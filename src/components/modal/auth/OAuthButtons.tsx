import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" w="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" height="20px" />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other provider</Button>
    </Flex>
  );
};
export default OAuthButtons;
