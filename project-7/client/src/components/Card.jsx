import React from 'react'
import { Card as ChakraCard } from "@chakra-ui/react"



    function Card({ children }) {
        return (
            <ChakraCard  borderRadius={{base:"none",md:"16px"}} p={{base:"none",md:"24px"}} bg={{base:"transparent",md:"white"}} boxShadow={{base:"none",md:"lg"}} w="456px">
                {children}
            </ChakraCard>
        )
    }


export default Card