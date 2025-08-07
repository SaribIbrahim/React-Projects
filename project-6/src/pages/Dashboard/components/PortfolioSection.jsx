import { HStack, Stack, Text, Icon, Tag,Button } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";

function PortfolioSection() {
    return (
        <>
            <HStack p="24px" bg="white" borderRadius="xl" justify="space-between" flexDirection={{base:"column",xl:"row"}} align={{base:"flex-start",xl:"center"}} >
                <HStack spacing={{base:"16px",xl:"30px",}} flexDirection={{base:"column",xl:"row"}} align={{base:"flex-start",xl:"center"}} >
                    <Stack>
                        <HStack color="black.80" >
                            <Text fontSize="sm"  >
                                Total Portfolio Value
                            </Text>
                            <Icon as={AiOutlineInfoCircle} />
                        </HStack>
                        <Text textStyle="h2" fontWeight="medium">
                            $ 109,897.20
                        </Text>
                    </Stack>
                    <Stack >
                        <HStack color="black.80" >
                            <Text fontSize="sm"  >
                                Wallet Balances
                            </Text>
                        </HStack>
                        <HStack  spacing={4} flexDirection={{base:"column",sm:"row"}} align={{base:"flex-start",sm:"center"}}>
                            <HStack>
                                <Text textStyle="h2" fontWeight="medium">
                                    22.39401000
                                </Text>
                                <Tag colorScheme="gray">BTC</Tag>
                            </HStack>
                            <HStack>
                                <Text textStyle="h2" fontWeight="medium">
                                    $ 1200.31
                                </Text>
                                <Tag colorScheme="gray">USD</Tag>
                            </HStack>
                        </HStack>
                    </Stack>
                </HStack>{/* Content */}
                <HStack >
                    <HStack>
                        <Button leftIcon={<Icon as={LuArrowDownToLine} />}>   Deposit</Button>
                    </HStack>
                    <HStack>
                        <Button leftIcon={<Icon as={LuArrowUpToLine} />}>Withdraw</Button>
                    </HStack>
                </HStack>{/* Buttons */}
            </HStack> {/* Portfolio Section */}
        </>
    )
}

export default PortfolioSection