import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Select,
  Flex,
  Text
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
    <Box w={"100%"}>
      <Grid templateColumns="repeat(4, 1fr)"  >
        <GridItem gridColumnStart={2} gri mt={10} w={"100%"} colSpan={2}>
          <Heading mb={4}>Aged Cheeses</Heading>
          <Select
            placeholder="Filter by nutrition"
            onChange={(e) => sorted(e.target.value)}
          >
            <option value={"dsc"}>Cholesterol: Low to High</option>
            <option value={"asc"}>Cholesterol: High to Low</option>
          </Select>
          <GridItem w={"100%"}>
            <Flex >
              {agedCheese
                ? agedCheese.map((item, index) => (
                    <Box key={index} p={10}>
                      <Heading my={4}>{item.name}</Heading>
                      <Image src={item.image} boxSize={60} />
                      <Text mt={2}>Cholesterol: {item.cholesterol}</Text>
                    </Box>
                  ))
                : sortedArr.map((item, index) => (
                    <Box key={index} p={10}>
                      <Heading my={4}>{item.name}</Heading>
                      <Image src={item.image} boxSize={60} />
                      <Text>Cholesterol: {item.cholesterol}</Text>
                    </Box>
                  ))}
            </Flex>
          </GridItem>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default NutritionFilter;
