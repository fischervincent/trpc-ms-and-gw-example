import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const fetchSomethingById = (id: number) => async () => {
  const gwUrl = `http://localhost:4003/something/${id}`;
  const res = await fetch(gwUrl);
  return res.json();
};

function Something() {
  const somethingId = 99;
  const { isLoading, error, data } = useQuery(
    ["getSomethingById", somethingId],
    fetchSomethingById(somethingId)
  );

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
