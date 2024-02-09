import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.161:8080/v1/graphql', 
});

const authLink = setContext((_, { headers }) => {
  const token = 'securepp@dev';

  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
