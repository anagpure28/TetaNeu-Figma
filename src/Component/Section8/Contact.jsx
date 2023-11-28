'use client'

import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
// import "./Section8.css"

export default function Contact() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" style={{marginLeft: "13%", marginRight: "13%", gap: "20px"}}>
      <Stack direction="row" alignItems="center">
        <Text className='clear' textAlign={{base: "center", md: "left"}}>Anything not clear?</Text>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Text fontSize={{ base: '1rem', md: "18px" }} textAlign={{base: "center", md: "left"}} className='contactText'>
        You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <button className="applyButton4">
           CONTACT US
          </button>
        </Stack>
      </Stack>
    </Stack>
  )
}