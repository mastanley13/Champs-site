import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout/Layout';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
