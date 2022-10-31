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
  const [nutri, setNutri] = useState([]);

  let descCholesterol = () => {
    agedCheese.sort((a, b) => {
      let descNutri = a.cholesterol - b.cholesterol;
    //   return descNutri
      setNutri(descNutri)
    });
    
  };

  let ascCholesterol = () => {
    agedCheese.sort((a, b) => {
      let ascNutri = b.cholesterol - a.cholesterol;
    //   return ascNutri
      setNutri(ascNutri)
    });
    
  };

  return (
    <Box>
      <Grid templateRows="repeat(2, 1fr)" justifyItems={"center"}>
        {/* <GridItem>
          <Image 
            src={"/assets/bannerBackground.jpeg"}
            boxSize={50}  />
        </GridItem> */}
        <GridItem>
          <Heading>Aged Cheeses</Heading>
          <Select placeholder="Filter by nutrition">
            <option 
                value="Low Cholesterol" 
                onClick={descCholesterol()}>
              Cholesterol: Low to High
            </option>
            <option 
                value="High Cholesterol"
                onClick={ascCholesterol()}
                >Cholesterol: High to Low
            </option>
          </Select>
          <GridItem>
            <Flex flexDirection={"column"}>
              {nutri.map((item) => (
                <Box>
                  <Heading>{item.name}</Heading>
                  <Image src={item.image} />
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
