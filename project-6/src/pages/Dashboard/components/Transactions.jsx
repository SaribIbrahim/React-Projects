import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HStack, Stack, Text, Box, Flex, Icon, Grid, Divider, Button } from '@chakra-ui/react'
import { IoLogoUsd } from "react-icons/io";
import { FaBtc } from "react-icons/fa";

function Transactions() {

    const transactions = [{
        id: 1,
        icon: IoLogoUsd,
        text: "USD Deposit",
        amount: "+ 81,123.10 USD",
        timestamp: "2025-06-14 7:06 PM"
    },
    {
        id: 2,
        icon: FaBtc,
        text: "BTC Sell",
        amount: "- 12.48513391 BTC",
        timestamp: "2025-06-11 5:00 PM"
    },
    {
        id: 3,
        icon: IoLogoUsd,
        text: "USD Deposit",
        amount: "+ 10,000.20 USD",
        timestamp: "2025-06-09 4:34 PM"
    },

    ]

    return (
        <CustomCard>
            <Text fontSize="sm" color="black.80" mb={4}>Recent Transactions</Text>
            <Stack spacing={4}>
                {
                    transactions.map((transactions, index) => (
                        <Fragment key={transactions.id} >
                            {index != 0 && <Divider />}{/* For line between transactions */}
                            <Flex gap={4}>
                                <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                                    <Icon as={transactions.icon} />
                                </Grid>
                                <Flex justify="space-between" width={'full'}>
                                    <Stack gap={0}>
                                        <Text textStyle="h6">{transactions.text}</Text>
                                        <Text fontSize="sm" color="black.80">{transactions.timestamp}</Text>
                                    </Stack>
                                    <Text>{transactions.amount}</Text>
                                </Flex>
                            </Flex>
                        </Fragment>

                    ))
                }
            </Stack>
            <Button width={"full"} colorScheme='gray' mt={8}>View All</Button>


        </CustomCard>
    )
}

export default Transactions