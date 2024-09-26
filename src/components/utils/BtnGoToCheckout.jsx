import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BtnGoToCheckout({children}) {
    const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('/checkout')}>
        {children}
    </Button>
  )
}
