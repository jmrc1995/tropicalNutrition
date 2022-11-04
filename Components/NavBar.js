import { Flex,  chakra,  Image } from "@chakra-ui/react";


const NavBar = () => {
  return (
    <>
      <chakra.header 
        height={100}
        id="header" 
        px={4} 
        bg={"orange"}>
        <Flex
          border={4}
          color={"red"}
          justifyContent={"center"}
        >
          <Image 
            src="/assets/tropicalCheeseLogo.svg"
            boxSize="100px"
            
            />
        </Flex>
      </chakra.header>
    </>
  );
};

export default NavBar;
