import React from "react";
import "./Section6.css";
import emi from "../../Images/emi.png";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import search from "../../Images/search.png";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      alignSelf={{ base: "center", lg: "flex-start" }}
    >
      {children}
    </Box>
  );
}

const Section6 = () => {
  return (
    <div className="emiSection">
      <Box justifyContent={"end"}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "5%",
          }}
        >
          <img src={emi} alt="" />
          <Text className="faq" ml={3}>
            EMI Calculator
          </Text>
        </div>
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="space-evenly"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        maxW={"100%"}
      >
        <PriceWrapper>
          <VStack py={4}>
            <Box>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Loan Amount</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
                mr={"24px"}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                >
                  ₹
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="300000"
                  style={{ border: "none", backgroundColor: "white" }}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
            <Box>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Interest Rate (%)</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
                mr={"24px"}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                >
                  %
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="10.5"
                  style={{ border: "none", backgroundColor: "white" }}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
            <Box ml={4}>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Loan Tenture (In Months)</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                  w={'20'}
                >
                  Months
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Search Tata Neu"
                  style={{ border: "none", backgroundColor: "white" }}
                  pl={20}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <VStack py={4}>
            <Box>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Loan Amount</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
                mr={"24px"}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                >
                  ₹
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="300000"
                  style={{ border: "none", backgroundColor: "white" }}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
            <Box>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Interest Rate (%)</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
                mr={"24px"}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                >
                  %
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="10.5"
                  style={{ border: "none", backgroundColor: "white" }}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
            <Box ml={4}>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Loan Tenture (In Months)</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                  w={'20'}
                >
                  Months
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Search Tata Neu"
                  style={{ border: "none", backgroundColor: "white" }}
                  pl={20}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <VStack py={4}>
            <Box>
              <Text className="equated" textAlign={{base: "center", md: "left"}}>Equated Monthly Installments (EMI)</Text>
              <Text className="eqAmount" textAlign={{base: "center", md: "left"}}>₹ 14,977</Text>
              <Button className="apply">APPLY NOW</Button>
            </Box>
            <Box>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Interest Rate (%)</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
                mr={"24px"}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                >
                  %
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="10.5"
                  style={{ border: "none", backgroundColor: "white" }}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
            <Box ml={4}>
              <Text className="amount" textAlign={{base: "center", md: "left"}}>Loan Tenture (In Months)</Text>
              <InputGroup
                style={{
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "var(--light-states-on-background-high-contrast-opacity-012, rgba(33, 33, 33, 0.12))",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  bgColor={"#E3E7EF"}
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                  w={'20'}
                >
                  Months
                </InputLeftElement>
                <Input
                  type="search"
                  placeholder="Search Tata Neu"
                  style={{ border: "none", backgroundColor: "white" }}
                  pl={20}
                />
              </InputGroup>
              <Slider aria-label="slider-ex-4" defaultValue={30} mt={13}>
                <SliderTrack boxSize={1.5}>
                  <SliderFilledTrack bg="#8800EC" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg={'#FF0096'}>
                  <Box />
                </SliderThumb>
              </Slider>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </div>
  );
};

export default Section6;
