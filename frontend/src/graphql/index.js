const endPoint = 'http://localhost:8000/graphql';

export const graphQLClient = new GraphQLClient(endPoint, {
    headers: {
      authorization: 'Bearer MY_TOKEN',
    },
  })