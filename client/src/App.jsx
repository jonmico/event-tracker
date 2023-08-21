import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index/Index';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Navbar />
        <Routes>
          <Route index element={<Index />} />
          <Route element={<SignUp />} path={'signup'} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
