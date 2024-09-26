import React from 'react'

import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom'

export default function OrderCreatedSuccessfully() {
    const {orderId} = useParams();
    return (
        <Box textAlign="center" py={10} px={6}>
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Compra realizada satisfactoriamente
          </Heading>
          <Heading as="h3" size="md" mt={6} mb={2}>
            ID de la orden: {orderId}
          </Heading>
          <Text color={'gray.500'}>
            Te va a estar llegando un mail a la brevedad con más información sobre la compra
          </Text>
        </Box>
      )
}
