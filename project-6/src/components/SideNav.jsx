
import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { GoArrowSwitch } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

function SideNav() {

    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: GoArrowSwitch,
            text: "Transactions",
            link: "/transactions"
        }
    ]

    return (
        <Stack  w="256px" h={{ base:"90vh", lg:"100%" }} justifyContent="space-between" boxShadow={{
            base: "none", lg:"lg"}} bg="white"  >
            <Box> 
                <Heading as="h1" fontSize="20px" pt="56px" textAlign="center">@SARIB-IBRAHIM</Heading>
                <Box mt="24px" px="3"  >
                    {
                        navLinks.map((arr, index) => (
                            <HStack key={index} py="12px" px="16px" color="#797E82" borderRadius="10px"
                                _hover={{
                                    bg: "#F3F3F7",
                                    color: "#171717"
                                }}
                            >
                                <Icon as={arr.icon} />
                                <Text fontSize="14px" fontWeight="medium">{arr.text}</Text>
                            </HStack>
                        )
                        )
                    }
                </Box>
            </Box>
            <Box mt="24px" px="3" mb={{
                base:"none",lg:"24px"
            }} >    
                <HStack py="12px" px="16px" color="#797E82" borderRadius="10px"
                    _hover={{
                        bg: "#F3F3F7",
                        color: "#171717"
                    }}
                >
                    <Icon as={BiSupport} />
                    <Text fontSize="14px" fontWeight="medium">Support</Text>
                </HStack>
            </Box>
        </Stack>
    )
}

export default SideNav