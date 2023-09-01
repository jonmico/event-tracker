import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Index from './pages/Index/Index';
import SignUp from './pages/SignUp/SignUp';
import Events from './pages/Events/Events';

import CreateEventForm from './components/CreateEventForm/CreateEventForm';
import EventList from './components/EventList/EventList';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className={'appWrapper'}>
        <Navbar />
        <Routes>
          <Route index element={<Index />} />
          <Route element={<SignUp />} path={'signup'} />
          <Route element={<Events />} path={'events'}>
            <Route index element={<Navigate replace to={'browse'} />} />
            <Route element={<EventList />} path={'browse'} />
            <Route element={<CreateEventForm />} path={'create'} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// TODO: Make page for specific events. Include a map to show location (Leaflet?).
