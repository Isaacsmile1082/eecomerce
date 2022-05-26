import React from 'react'
import { Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription} from '@chakra-ui/react'
export const AlertForm = ({title, description}) => {
  return (
   
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>
            {description}
          </AlertDescription>
        </Alert>
      
  )
}
