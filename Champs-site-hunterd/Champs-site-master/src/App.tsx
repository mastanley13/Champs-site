import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { GroomingPage } from './pages/Grooming';
import { TrainingPage } from './pages/Training';
import { DaycarePage } from './pages/Daycare';
import { BoardingPage } from './pages/Boarding';
import { ContactPage } from './pages/Contact';
import { SupplyPage } from './pages/Supply/index';
import { ExternalRedirect } from './components/ExternalRedirect';
import { ScrollToTop } from './components/ScrollToTop';
import { BoardAndTrainPage } from './pages/BoardAndTrain';
import { TermsPage } from './pages/Terms';
import { EmployeeResourcesPage } from './pages/EmployeeResources';

// Constants for external URLs
const EXTERNAL_URLS = {
  SHOPIFY: import.meta.env.VITE_SHOPIFY_STORE_URL || 'https://championdogproducts.com/collections',
  CUSTOMER_PORTAL: import.meta.env.VITE_CUSTOMER_PORTAL_URL || 'https://your-customer-portal-url.com'
} as const;

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/grooming" element={<GroomingPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/daycare" element={<DaycarePage />} />
        <Route path="/boarding" element={<BoardingPage />} />
        <Route path="/supply" element={<SupplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/board-and-train" element={<BoardAndTrainPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/employee-resources" element={<EmployeeResourcesPage />} />

        {/* Customer Portal Route */}
        <Route 
          path="/customer-portal"
          element={<ExternalRedirect to={EXTERNAL_URLS.CUSTOMER_PORTAL} />} 
        />

        {/* Shop Redirects to Shopify */}
        <Route 
          path="/shop" 
          element={<ExternalRedirect to={EXTERNAL_URLS.SHOPIFY} />} 
        />
        <Route 
          path="/shop/:category" 
          element={<Navigate to={EXTERNAL_URLS.SHOPIFY} replace />} 
        />

        {/* Service Booking Redirects */}
        <Route 
          path="/booking/*" 
          element={<ExternalRedirect to={EXTERNAL_URLS.CUSTOMER_PORTAL} />} 
        />
        <Route 
          path="/grooming/book" 
          element={<Navigate to={`${EXTERNAL_URLS.CUSTOMER_PORTAL}/grooming`} replace />} 
        />
        <Route 
          path="/daycare/book" 
          element={<Navigate to={`${EXTERNAL_URLS.CUSTOMER_PORTAL}/daycare`} replace />} 
        />
        <Route 
          path="/boarding/book" 
          element={<Navigate to={`${EXTERNAL_URLS.CUSTOMER_PORTAL}/boarding`} replace />} 
        />

        {/* Fallback Routes */}
        <Route path="/supply/*" element={<Navigate to="/supply" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}