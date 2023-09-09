import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Index from './pages/Index/Index';
import SignUp from './pages/SignUp/SignUp';
import Events from './pages/Events/Events';

import CreateEventForm from './components/CreateEventForm/CreateEventForm';
import EventList, {
  loader as eventListLoader,
} from './components/EventList/EventList';

import EventDetail, {
  loader as eventDetailLoader,
} from './components/EventDetail/EventDetail';
import AppLayout from './pages/AppLayout/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'events',
        element: <Events />,

        children: [
          {
            index: true,
            element: <Navigate replace to={'browse'} />,
          },
          {
            path: 'browse',
            element: <EventList />,
            loader: eventListLoader,
          },

          {
            path: 'create',
            element: <CreateEventForm />,
          },
          {
            path: ':id',
            element: <EventDetail />,
            loader: eventDetailLoader,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// TODO: Make page for specific events. Include a map to show location (Leaflet?).
