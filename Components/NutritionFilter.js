import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import { agedCheese } from "../utils/Cheese";
import { motion } from "framer-motion";

function NutritionFilter() {
  let [sortType, setSortType] = React.useState(" ");
  let [sortedArr, setSortedArr] = React.useState([]);

  const sorted = (e) => {
    setSortType(e);
    if (sortType === "dsc") {
      agedCheese.sort((a, b) => {
        return b.cholesterol - a.cholesterol;
      });
    } else {
      agedCheese.sort((a, b) => {
        return a.cholesterol - b.cholesterol;
      });
    }
    setSortedArr(agedCheese);
  };

  return (
    <Box my={10} display={"flex"} flexDirection={"column"} w={"100%"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        my={"20"}
      >
        <Heading
          fontSize={"2xl"}
          letterSpacing={1.2}
          mb={8}
          textAlign={"center"}
          fontFamily={"p"}
          fontWeight={"normal"}
        >
          Sorting products using their nutritional facts
        </Heading>
        <Select
          w={"50%"}
          fontFamily={"heading"}
          fontWeight={"normal"}
          letterSpacing={1.5}
          alignItems={"center"}
          placeholder="Filter by nutrition"
          onChange={(e) => sorted(e.target.value)}
        >
          <option value={"dsc"}>Cholesterol: Low to High</option>
          <option value={"asc"}>Cholesterol: High to Low</option>
        </Select>
      </Box>

      <Grid
        fontFamily={"p"}
        gridTemplateColumns={{ md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gridTemplateRows={"repeat(2, 1fr)"}
        mx={"auto"}
      >
        {agedCheese
          ? agedCheese.map((item, index) => (
              <>
                <Box
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  maxW="lg"
                  border={"none"}
                  boxShadow="lg"
                  bgColor={"#FFFfff"}
                  borderWidth="1px"
                  rounded="lg"
                  overflow="hidden"
                  m={2}
                  p={2}
                >
                  <GridItem key={index}>
                    <Image src={item.image} boxSize={60} />
                    <Box
                      mt="4"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                    >
                      {item.name}
                    </Box>
                    <Box
                      fontSize={"xs"}
                      display={"grid"}
                      gridTemplateColumns={{
                        base: "repeat(2, 1fr)",
                      }}
                    >
                      <GridItem rowGap={"100px"}>
                        <Text fontWeight={"light"} mt={2}>
                          Cholesterol: {item.cholesterol}%
                        </Text>
                        <Text fontWeight={"light"} mt={2}>
                          Calories: {item.calories}%
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text fontWeight={"light"} mt={2}>
                          Protein: {item.protein}%
                        </Text>
                        <Text fontWeight={"light"} mt={2}>
                          Sodium: {item.sodium}%
                        </Text>
                      </GridItem>
                    </Box>
                  </GridItem>
                </Box>
              </>
            ))
          : sortedArr.map((item, index) => (
              <Box key={index}>
                <Heading my={"0"}>{item.name}</Heading>
                <Image src={item.image} boxSize={60} />
                <Text>Cholesterol: {item.cholesterol}</Text>
              </Box>
            ))}
      </Grid>
      <Box
        display={"flex"}
        justifyContent={"center"}
        my={10}
        fontFamily={"heading"}
        mx={{ base: "10", sm: "20", md: "40", lg: "60", xl: "400" }}
      >
        <Box fontSize={"sm"}>
          Give more control to the user when it comes to picking out their
          products. This application lets the user sort all items in{" "}
          <Text fontWeight={"bold"} color={"orange"} display={"inline"}>
            ascending
          </Text>{" "}
          and
          <Text fontWeight={"bold"} color={"orange"} display={"inline"}>
            {" "}
            descending{" "}
          </Text>
          descending order,based on which nutritional fact is chosen.
        </Box>
      </Box>
    </Box>
  );
}

export default NutritionFilter;
