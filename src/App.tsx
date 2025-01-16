import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/Home/index';
import { AboutPage } from './pages/About';
import { GroomingPage } from './pages/Grooming';
import { TrainingPage } from './pages/Training';
import { DaycarePage } from './pages/Daycare';
import { BoardingPage } from './pages/Boarding';
import { ContactPage } from './pages/Contact';
import SupplyPage from './pages/Supply/index';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/grooming" element={<GroomingPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/daycare" element={<DaycarePage />} />
        <Route path="/boarding" element={<BoardingPage />} />
        <Route path="/supply" element={<SupplyPage />} />
        <Route path="/supply/*" element={<Navigate to="/supply" replace />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}