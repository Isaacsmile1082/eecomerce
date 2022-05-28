import { gql, request } from "graphql-request";
import { useMutation, useQuery } from "react-query";
const endPoint = 'http://localhost:8000/graphql';


export const useGetEmployers = (options, input) => useQuery(["employers", options], async () => {
    const data = await request(
        endPoint,
        gql`
        query employer($filter: FilterEmployerInput) {
            employers(filterEmployer: $filter){
              items {
                id
                lastName
                firstName
                email
                age
                phoneNumber
              }
            }
          }
        `,
        input
    );
    return data;
})

export const useCreateEmployer = (options) => useMutation(newEmployer => {
    return request(
        endPoint,
        gql`
            mutation createEmployer($employer:EmployerInput!){
            createEmployer(EmployerData:$employer){
                id
                lastName
                firstName
                email
                age
                phoneNumber
            }
        }
        `,
        newEmployer
    )
},
    options
);

export const useUpdateEmployer = (options) => useMutation(employerData => {
    return request(
        endPoint,
        gql`
        mutation updateEmployer( $employer: EmployerInput! ) {
            updateEmployer( EmployerData: $employer ) {
                id
                lastName
                firstName
                lastName
                age
                phoneNumber
            }
        }
        `,
        employerData
    )
},
    options
)

export const useDeleteEmployer = (options) => useMutation(id => {
    return request(
        endPoint,
        gql`
        mutation deleteEmployer($id: String!) {
            removeEmployer(id: $id)
        }
        `,
        id
    )
},
    options
)