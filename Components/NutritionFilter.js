import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Select,
  Flex,
  Text,
} from "@chakra-ui/react";
import { agedCheese } from "../utils/Cheese";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

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
    <Box  display={"block"} mx={"18"} my={10}>
      <Heading mb={4} textAlign={"center"}>Sorting products using their nutritional facts</Heading>
      <Select
        placeholder="Filter by nutrition"
        onChange={(e) => sorted(e.target.value)}
      >
        <option value={"dsc"}>Cholesterol: Low to High</option>
        <option value={"asc"}>Cholesterol: High to Low</option>
      </Select>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gridTemplateRows={"repeat(2, 1fr)"} mx={2}>
          {agedCheese
            ? agedCheese.map((item, index) => (
                <GridItem key={index} m={2} p={2} border={"2px"} borderRadius={"20"}>
                  <Text fontWeight={"bold"} my={4}>{item.name}</Text>
                  <Image src={item.image} boxSize={60} />
                  <Text fontWeight={"bold"} mt={2}>Cholesterol: {item.cholesterol}%</Text>
                </GridItem>
              ))
            : sortedArr.map((item, index) => (
                <Box key={index} p={10}>
                  <Heading my={4}>{item.name}</Heading>
                  <Image src={item.image} boxSize={60} />
                  <Text>Cholesterol: {item.cholesterol}</Text>
                </Box>
              ))}
      </Grid>
    </Box>
  );
}

export default NutritionFilter;
