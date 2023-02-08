import { auth } from "@/src/firebase/client-app";
import { Flex, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./rightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" />
        <Image
          src="/images/redditText.svg"
          height="40px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <RightContent user={user} />
      {/* <Directory/> */}
    </Flex>
  );
};
export default Navbar;
