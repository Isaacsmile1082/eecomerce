import { gql, request } from "graphql-request";
import { useMutation, useQuery } from "react-query";
const endPoint = 'http://localhost:8000/graphql';


export const useGetEmployers = () => useQuery(["employers"], async () => {
    const data = await request(
        endPoint,
        gql`
        query employer {
            employers{
              id
              lastName
              firstName
              email
              age
              phoneNumber
            }
          }
        `
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
            }
        }
        `,
        newEmployer
    )
},
    options
)