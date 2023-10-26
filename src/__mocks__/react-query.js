import React, { createContext, useContext } from 'react';

const Hydrate = ({ state, children }) => {
  return <div data-testid="mock-hydrate">{children}</div>;
};

class QueryClient {
  constructor() {
    this.queries = {};
  }

  setQueryData(key, data) {
    this.queries[key] = data;
  }

  invalidateQueries(key) {
    delete this.queries[key];
  }
}

function useQuery(queryKey, queryFn) {
  if (queryKey in this.queries) {
    return { data: this.queries[queryKey] };
  } else {
    return { data: null };
  }
}

const QueryClientContext = createContext(
  new QueryClient()
);

const QueryClientProvider = ({ client, children }) => {
  const contextValue = { useQuery };
  
  return (
    <QueryClientContext.Provider value={contextValue}>
      <div data-testid="mock-query-client-provider">
        {children}
      </div>
    </QueryClientContext.Provider>
  );
};

function useCustomQuery() {
  return useContext(QueryClientContext).useQuery;
}

module.exports = {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  useQuery: useCustomQuery
};

