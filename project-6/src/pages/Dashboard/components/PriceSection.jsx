import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HStack, Stack, Text, Icon, Button, Flex, Image,Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,} from '@chakra-ui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";



function PriceSection() {

    const timeStamps = ["4:30 AM", "5:30 AM", "6:30 AM", "7:30 AM", "8:30 AM", "9:30 AM"]

    return (
        <>
            <CustomCard>
                <Flex justify="space-between" align="start">
                    <Stack >
                        <HStack color="black.80" >
                            <Text fontSize="sm"  >
                                Current Price
                            </Text>
                        </HStack>
                        <HStack spacing={4} flexDirection={{ base: "column", sm: "row" }} align={{ base: "flex-start", sm: "center" }}>
                            <HStack>
                                <Text textStyle="h2" fontWeight="medium">
                                    22.39401000
                                </Text>
                                <HStack color="green.400" fontWeight="medium" fontSize="md">
                                    <Icon as={BsArrowUpRight} />
                                    <Text >
                                        0.04%
                                    </Text>
                                </HStack>
                            </HStack>
                        </HStack>
                    </Stack>{/* Price Section */}
                    <HStack >
                        <HStack>
                            <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
                        </HStack>
                        <HStack>
                            <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
                        </HStack>
                    </HStack>{/* Buttons */}
                </Flex>{/* Wrapper */}
                <Tabs variant="soft-rounded">
                    <Flex justify="end">
                        <TabList bg="black.5" p="3px">
                            {["1H", "1D", "1W", "1M"].map((tab) => (
                                <Tab
                                    _selected={{ bg: "white" }}
                                    key={tab}
                                    fontSize="sm"
                                    p="6px"
                                    borderRadius="4"
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </TabList>
                    </Flex>
                    <TabPanels>
                        <TabPanel>
                            <Image src='/Graph.png' w="100%" mt={6} />
                            <HStack justify="space-between">
                                {
                                    timeStamps.map((time, index) => (
                                        <Text key={index} fontSize="sm" color="black.80">{time}</Text>
                                    ))}
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>{/* Tabs e.g 1day,1month  */}

            </CustomCard >

        </>
    )
}

export default PriceSection