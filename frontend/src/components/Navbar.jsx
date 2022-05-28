import React from 'react'
import { Center, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <Center mt='10'>
            <HStack spacing={3}>
                <Link to='/employers'>
                    Employer
                </Link>
                <Link to='/bills'>
                    Bills
                </Link>
                <Link to='/clients'>
                    Clients
                </Link>
                <Link to='/products'>
                    Products
                </Link>
            </HStack>
        </Center>
    )
}
