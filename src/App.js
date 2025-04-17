
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import PaymentPage from './pages/PaymentPage';
import TermsPage from './pages/TermsPage';
import TariffPage from './pages/TariffPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/kako-da-platam' element={<PaymentPage />} />
        <Route path='/opsti-uslovi' element={<TermsPage />} />
        <Route path='/tarifnik' element={<TariffPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
