import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import PaymentPage from './pages/PaymentPage';

import TermsPage from './pages/TermsPage';
import TariffPage from './pages/TariffPage';
import ContactPage from './pages/ContactPage';

import PrivacyPage from './pages/PrivacyPage';
import ApplyPage from './pages/ApplyPage';
import CookiePage from './pages/CookiePage';
=======
// import PrivacyPage from './pages/PrivacyPage';
import ApplyPage from './pages/ApplyPage';
import CookiePage from './pages/CookiePage';

import TariffPage from './pages/TariffPage';
=======
=======




function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/kako-da-platam' element={<PaymentPage />} />

        <Route path='/opsti-uslovi' element={<TermsPage />} />

        <Route path='/tarifnik' element={<TariffPage />} />
        <Route path='/kontakt' element={<ContactPage />} />

        <Route path='/privacy-policy' element={<PrivacyPage />} />
        <Route path='/cookie-policy' element={<CookiePage />} />
        <Route path='/kako-da-apliciram' element={<ApplyPage />} />
=======
        {/* <Route path='/privacy-policy' element={<PrivacyPage />} /> */}
        <Route path='/cookie-policy' element={<CookiePage />} />

        <Route path='/kako-da-apliciram' element={<ApplyPage />} />
=======
        <Route path='/kako-da-apliciram' element={<ApplyPage />} /> */}
=======

        <Route path='/tarifnik' element={<TariffPage />} />
=======
=======





      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
