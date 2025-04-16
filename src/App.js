
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/kako-da-platam' element={<PaymentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
