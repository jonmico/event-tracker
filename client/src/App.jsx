import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>what</div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
