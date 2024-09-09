import { Center, Flex, Spinner, Stack } from '@chakra-ui/react'
import React from 'react'

export default function LoadingSpinner() {
  return (
    <Stack textAlign={'center'} h={'100vh'} >
        <Center>
            <Spinner />
        </Center>
    </Stack>
  )
}
