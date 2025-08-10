import React from 'react'
import { Card as ChakraCard } from "@chakra-ui/react"



    function Card({ children,showCard=false,...props }) {
        return (
            <ChakraCard  borderRadius={{base : showCard? "16px":"none",md:"16px"}}
             p={{base : showCard? "16px" : "none" , md:"24px"}} bg={{base : showCard?"white":"transparent",md:"white"}} boxShadow={{base:showCard? "md":"none",md:"lg"}} w="456px" {...props}>
                {children}
            </ChakraCard>
        )
    }


export default Card