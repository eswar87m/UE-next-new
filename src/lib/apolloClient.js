// apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.AEM_URL, // Use the AEM_URL from your .env file
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      host: process.env.AEM_HOST, // Use the AEM_HOST from your .env file
      'Authorization': `Bearer ${process.env.AEM_SECRET_KEY}`, // Use the AEM_SECRET_KEY from your .env file
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
