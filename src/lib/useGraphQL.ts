/*
All Rights Reserved.
Copyright 2023 Adobe
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import { useState, useEffect } from 'react';
import { getAuthorHost } from "../utils/fetchData";
import AEMHeadless from '@adobe/aem-headless-client-js';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

/**
 * Custom Hook to perform a GraphQL query
 * @param path - Persistent query path
 * @param variables - Persistent query variables
 */
const useGraphQL = (path: string, variables: {[key: string]: any} = {}) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const sdk = new AEMHeadless({
      serviceURL: getAuthorHost(),
      endpoint: GRAPHQL_ENDPOINT
    });
    const request = sdk.runPersistedQuery.bind(sdk);

    const executeQuery = async () => {
      try {
        const response = await request(path, variables, { credentials: 'include' });
        if (response.data) {
          setResult(response.data);
        }
      } catch(error) {
        console.log(`Error retrieving ${path}`, error);
        setResult(null);
      }
    }

    executeQuery();
  }, [path, variables]);

  return result;
};

export default useGraphQL;
