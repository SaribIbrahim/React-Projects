import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag,Text } from '@chakra-ui/react'

function InfoCard({text,tag,inverted}) {
  return (
    <CustomCard p={"5"} mb={{base:"1",md:"4"}} bg={inverted? 'p.purple':'white'}>
        <Tag bg={inverted? 'white':"p.purple"} color={inverted? 'p.purple':"white"} mb={4}>{tag}</Tag>
        <Text textStyle={"h5"} color={inverted? 'white':'black.80'} fontWeight={"medium"}>{text}</Text>
    </CustomCard>
  )
}

export default InfoCard