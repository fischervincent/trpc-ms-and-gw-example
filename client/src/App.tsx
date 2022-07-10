import React from 'react';
import { useState } from "react";
import superjson from "superjson";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./utils/trpc";

function Something() {
  const somethingId = 99;
  const { isLoading, error, data } = trpc.useQuery([
    "ms1.something.getById",
    somethingId,
  ]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  );
}

function App() {
  const gwUrl = "http://localhost:4003";
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: `${gwUrl}/trpc`,
      transformer: superjson,
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Something />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
