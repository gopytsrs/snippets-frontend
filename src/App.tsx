import Snippets from './features/snippets/Snippets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Snippets />
    </QueryClientProvider>
  );
}

export default App;
