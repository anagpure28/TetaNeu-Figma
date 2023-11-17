import React from 'react';
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
  } from '@chakra-ui/react';
  import "./Section1.css";
  import father from "../../Images/father.png"
//   import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';

const Section1 = () => {
  return (
    <Container maxW={'100%'} style={{border: "2px solid red"}}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={2} style={{margin: "80px 80px 0px", height: "429px"}}>
        <Stack style={{border: "1px solid red" }}>
          {/* <div style={{border: "1px solid blue"}}> */}
            <Text className="boldText">Turn Dreams Into Reality With <span>Personal Loans</span></Text>
          {/* </div> */}
        </Stack>
        <Flex>
          <Image
            alt={'feature image'}
            src={
              father
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default Section1