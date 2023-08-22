import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index/Index';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import Events from './pages/Events/Events';

export default function App() {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Navbar />
        <Routes>
          <Route index element={<Index />} />
          <Route element={<SignUp />} path={'signup'} />
          <Route element={<Events />} path={'events'} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
