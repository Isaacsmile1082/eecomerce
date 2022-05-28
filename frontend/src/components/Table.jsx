import React, { useState } from 'react'
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
    useDisclosure,
    HStack,
    Input,
    Spinner
} from '@chakra-ui/react'
import { ModalForm } from './ModalForm'
import { useLocation } from 'react-router-dom'
import { useDeleteEmployer, useGetEmployers } from '../graphql/employer'
import { useQueryClient } from 'react-query'

const initialEmployer = {
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    email: ''
}

export const TableEmployers = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const location = useLocation();

    const queryClient = useQueryClient();

    const handleOnChangeName = (e) => {
        setEmployerName(e.target.value)
    }

    const [employerName, setEmployerName] = useState('');

    const { isLoading, data } = useGetEmployers(employerName, {
        "filter": {
            "firstName": employerName,
            "options": {
                "page": 1,
                "limit": 20,
                "route": "http://localhost:8000"
            }
        }
    });


    const [activeEmployer, setActiveEmployer] = React.useState(initialEmployer);

    const [isEdit, setIsEdit] = React.useState(false);

    const reset = () => setActiveEmployer(() => initialEmployer)

    const handleBtnAdd = () => {
        reset();
        onOpen();
        setIsEdit(() => false)
    }

    const handleBtnEdit = React.useCallback((employer) => {
        setActiveEmployer(() => employer);
        onOpen();
        setIsEdit(() => true)
    }, [onOpen]);

    const { mutate: mutateDelete } = useDeleteEmployer(
        {
            onSuccess: (data, variables) => {
                queryClient.invalidateQueries("employers");
                queryClient.setQueryData(["employers", { id: variables.id }], data);
            },
        }
    );

    return (
        <>
            <TableContainer mt={10} mx='10'>
                <Center my={'10'}>
                    <Text fontSize='3xl'>
                        Employers
                    </Text>
                </Center>
                <Flex justifyContent={'flex-end'} mb='10'>
                    <HStack>
                        <Input placeholder='search by name...' onChange={handleOnChangeName} value={employerName} />
                        <Center>
                            <Button variant='solid' colorScheme={'teal'} onClick={handleBtnAdd}>
                                Add employer
                            </Button>
                        </Center>
                    </HStack>
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
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.employers?.items?.map((employer) => (

                                <Tr key={employer.id}>
                                    <Td>{employer.firstName}</Td>
                                    <Td>{employer.lastName}</Td>
                                    <Td>{employer.email}</Td>
                                    <Td isNumeric>{employer.age}</Td>
                                    <Td >{employer.phoneNumber}</Td>
                                    <Td>
                                        <HStack spacing={1}>
                                            <Button
                                                colorScheme={'yellow'}
                                                onClick={() => handleBtnEdit(employer)}
                                            >Edit</Button>
                                            <Button
                                                onClick={() => mutateDelete({ id: employer.id })}
                                                colorScheme={'red'}>Delete</Button>
                                        </HStack>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <ModalForm
                isOpen={isOpen}
                onClose={onClose}
                type={location.pathname}
                employerData={activeEmployer}
                isEdit={isEdit}
            />
        </>
    )
}
