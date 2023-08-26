import { Outlet } from 'react-router-dom';

import EventNavbar from '../../components/EventNavbar/EventNavbar';

// TODO: Redo this page. Maybe add some type of navigation menu for it.

export default function Events() {
  return (
    <div className={'mainWrapper'}>
      <EventNavbar />
      <Outlet />
    </div>
  );
}
