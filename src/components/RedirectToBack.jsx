import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RedirectToBack() {
    const navigate = useNavigate();
    return (
    <Box ml={"1rem"} mt={"1rem"} onClick={() => navigate(-1)} position={'absolute'} cursor={'pointer'}>
      <ArrowBackIcon fontSize={"2rem"} />
  </Box>
  )
}
