import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';
import ProgramsPage from './pages/ProgramsPage';
import ContactPage from './pages/ContactPage';
import ReceiptVerificationPage from './pages/ReceiptVerificationPage';  

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/verify-receipt" element={<ReceiptVerificationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;