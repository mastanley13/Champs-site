import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout/Layout';

// Import pages
import { HomePage } from './pages/Home';
import { DaycarePage } from './pages/Daycare';
import { BoardingPage } from './pages/Boarding';
import { GroomingPage } from './pages/Grooming';
import { TrainingPage } from './pages/Training';
import { SupplyPage } from './pages/Supply';
import { ContactPage } from './pages/Contact';
import { AboutPage } from './pages/About';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/daycare" element={<DaycarePage />} />
            <Route path="/boarding" element={<BoardingPage />} />
            <Route path="/grooming" element={<GroomingPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/supply" element={<SupplyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
