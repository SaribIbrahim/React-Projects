import { HStack, Stack, Text, Icon, Tag,Button } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";

function PortfolioSection() {
    return (
        <>
            <HStack p="24px" bg="white" borderRadius="xl" spacing={16} justify="space-between" >
                <HStack spacing={10}>
                    <Stack>
                        <HStack color="black.80" >
                            <Text fontSize="sm"  >
                                Total Portfolio Value
                            </Text>
                            <Icon as={AiOutlineInfoCircle} />
                        </HStack>
                        <Text textStyle="h2">
                            $ 109,897.20
                        </Text>
                    </Stack>
                    <Stack >
                        <HStack color="black.80" >
                            <Text fontSize="sm"  >
                                Wallet Balances
                            </Text>
                        </HStack>
                        <HStack spacing={5}>
                            <HStack>
                                <Text textStyle="h2">
                                    22.39401000
                                </Text>
                                <Tag colorScheme="gray">BTC</Tag>
                            </HStack>
                            <HStack>
                                <Text textStyle="h2">
                                    $ 1200.31
                                </Text>
                                <Tag colorScheme="gray">USD</Tag>
                            </HStack>
                        </HStack>
                    </Stack>
                </HStack>
                <HStack>
                    <HStack>
                        <Button leftIcon={<Icon as={LuArrowDownToLine} />}>   Deposit</Button>
                    </HStack>
                    <HStack>
                        <Button leftIcon={<Icon as={LuArrowUpToLine} />}>Withdraw</Button>
                    </HStack>
                </HStack>
            </HStack> {/* Portfolio Section */}
        </>
    )
}

export default PortfolioSection