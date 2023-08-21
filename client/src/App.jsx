import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index/Index';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Navbar />
        <Routes>
          <Route index element={<Index />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
