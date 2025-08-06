import { HStack, Stack, Text, Icon, Tag } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from "react-icons/ai"

function PortfolioSection() {
    return (
        <HStack p="24px" bg="white" borderRadius="xl" spacing={16}>
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
                <HStack spacing={8}>
                    <HStack>
                        <Text textStyle="h2">
                            22.39401000
                        </Text>
                        <Tag>BTC</Tag>
                    </HStack>
                    <HStack>
                        <Text textStyle="h2">
                           $ 1200.31
                        </Text>
                        <Tag>USD</Tag>
                    </HStack>
                </HStack>
            </Stack>
        </HStack>
    )
}

export default PortfolioSection