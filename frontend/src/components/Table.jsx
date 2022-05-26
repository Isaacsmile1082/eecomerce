import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Center,
    Flex,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { ModalForm } from './ModalForm'
import { useLocation } from 'react-router-dom'
import { useGetEmployers } from '../graphql/employer'

export const TableEmployers = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    let location = useLocation();
    console.log(location)

    const { isLoading, data  } = useGetEmployers();
    

    if(isLoading) {
        return <Text>Loading...</Text>
    }
    
    return (
        <>
        <TableContainer mt={10} mx='10'>
            <Center my={'10'}>
                <Text fontSize='3xl'>
                    Employers
                </Text>
            </Center>
            <Flex justifyContent={'flex-end'} mb='10'>
                <Center>
                    <Button variant='solid' colorScheme={'teal'} onClick={onOpen}>
                        Add employer
                    </Button>
                </Center>
            </Flex>
            <Table variant='simple'>
                <TableCaption>Employers</TableCaption>
                <Thead>
                    <Tr>
                        <Th>FirstName</Th>
                        <Th>lastName</Th>
                        <Th>email</Th>
                        <Th isNumeric>age</Th>
                        <Th>phoneNumber</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data?.employers?.map(({
                            id,
                            firstName,
                            lastName,
                            email,
                            age,
                            phoneNumber
                        }) => (

                            <Tr key={id}>
                                <Td>{firstName}</Td>
                                <Td>{lastName}</Td>
                                <Td>{email}</Td>
                                <Td isNumeric>{age}</Td>
                                <Td >{phoneNumber}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
        <ModalForm isOpen={isOpen} onClose={onClose} type={location.pathname}/>
        </>
    )
}
