import React from "react";
import {
    Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Grid,
  } from '@chakra-ui/react';
  import click from ".././../Images/click.png";
  import Document from ".././../Images/Document.png";
  import Eligibility from ".././../Images/Eligibility.png";
  import Loan from ".././../Images/Loan.png";
  import "../Section2/Section2.css"

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        {text ? <Text fontWeight={600} className="text2">{text}</Text> : <span className="text2 voilet">Eligibility</span>}
      </Stack>
    )
  }

const SubSection2 = () => {
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        pl={"5%"}
        mt={10}
        gap={{ base: "8", sm: "12", md: "12" }}
      >
            <Feature
              icon={<Image src={Eligibility} />}   
              text={''}
            />
            <Feature
              icon={<Image src={click} />}
              text={'How to apply'}
            />
            <Feature
              icon={<Image src={Document} />}    
              text={'Documentation'}
            />
            <Feature
              icon={<Image src={Loan} />}    
              text={'Fees & Charges'}
            />
          </Grid>
    </div>
  );
};

export default SubSection2;
