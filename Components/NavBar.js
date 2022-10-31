import { Text, Flex, HStack, chakra, Link, Image } from "@chakra-ui/react";

// const menuItems = [
//   { title: "Home", link: "/" },
//   { title: "About", link: "/about" },
//   { title: "Episodes", link: "/episodes" },
// ];

const NavBar = () => {
  return (
    <>
      <chakra.header 
        height={100}
        id="header" 
        px={4} 
        bg={"orange"}>
        <Flex
          w="100%"
          border={4}
          color={"red"}
        >
          <Image 
            src="/assets/tropicalCheeseLogo.svg"
            boxSize={"100px"} />
            
        </Flex>
      </chakra.header>
    </>
  );
};

export default NavBar;
