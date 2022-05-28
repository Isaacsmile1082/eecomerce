import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,

} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { emailReg } from '../constants/reges';
import { AlertForm } from './AlertForm';
import { useCreateEmployer, useUpdateEmployer } from '../graphql/employer';
import { useQueryClient } from 'react-query';

export const ModalForm = ({
  isOpen,
  onClose,
  type,
  employerData,
  isEdit = false
}) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    shouldFocusError: true,
  });


  React.useEffect(() => {
    setValue('employer', employerData)
  }, [employerData, setValue])

  const queryClient = useQueryClient();


  const onSubmit = (data) => {
    if (isEdit) {
      data.employer.age = Number(data.employer.age)
      mutateUpdate(data);
    } else {
      data.employer.age = Number(data.employer.age)
      mutateCreate(data);
    }

    onClose();
  }

  const { mutate: mutateCreate } = useCreateEmployer(
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries("employers");
        queryClient.setQueryData(["employers", { id: variables.id }], data);
      },
    }
  );

  const { mutate: mutateUpdate } = useUpdateEmployer(
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries("employers");
        queryClient.setQueryData(["employers", { id: variables.id }], data);
      },
    }
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            {errors.email && errors.email.type === "pattern" &&
              <AlertForm
                title={'Email invalid'}
                description='Invalid email pattern' />
            }
            <ModalHeader>{type.replace('/', '')}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor='first-name'>First name</FormLabel>
                  <Input {...register('employer.firstName')} id='first-name' placeholder='First name' />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='first-name'>Last name</FormLabel>
                  <Input {...register('employer.lastName')} id='last-name' placeholder='Last name' />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input {...register('employer.email', {
                    pattern: emailReg,
                    required: true
                  })} id='email' placeholder='Email' />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='age'>Age</FormLabel>
                  <NumberInput {...register('employer.age')} id='age'>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor='phone-number'>Phone number</FormLabel>
                  <Input {...register('employer.phoneNumber')} id='phone-number' placeholder='Phone number' />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type='submit'>
                {
                  isEdit ? 
                  'Update'
                  :
                  'Submit'
                }
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  )
}
