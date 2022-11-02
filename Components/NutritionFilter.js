import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Select,
  Flex,
} from "@chakra-ui/react";
import { agedCheese } from "../utils/Cheese";
import { useState } from "react";

function NutritionFilter() {
  let [sortType, setSortType] = React.useState(" ");
  let [sortedArr, setSortedArr] = React.useState([]);

  const sorted = (e) => {
    setSortType(e);
    if (sortType === "asc") {
      agedCheese.sort((a, b) => {
        return a.cholesterol - b.cholesterol;
      });
    } else {
      agedCheese.sort((a, b) => {
        return b.cholesterol - a.cholesterol;
      });
    }
  };
  


  console.log(sortedArr)

  setSortedArr(agedCheese)

  return (

    <Box>
      <Grid templateRows="repeat(2, 1fr)" justifyItems={"center"}>
        <GridItem>
          <Heading>Aged Cheeses</Heading>
          <Select
            placeholder="Filter by nutrition"
            onChange={(e) => sorted(e.target.value)}
            // value={sortType}
          >
            <option value={"dsc"}>Cholesterol: Low to High</option>
            <option value={"asc"}>Cholesterol: High to Low</option>
          </Select>
          <GridItem>
            <Flex flexDirection={"column"}>
              {sortedArr.map((item, index) => {
                <Box key={index}>
                  <Heading>{item.name}</Heading>
             
                </Box>;
              })}
            </Flex>
          </GridItem>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default NutritionFilter;
