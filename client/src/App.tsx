import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const fetchSomething = async () => {
  const gwUrl = `http://localhost:4003/`;
  const res = await fetch(gwUrl);
  return res.json();
};

function Something() {
  const { isLoading, error, data } = useQuery(["repoData"], fetchSomething);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <div>
      <h1>{data.somethingName}</h1>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Something />
    </QueryClientProvider>
  );
}

export default App;
