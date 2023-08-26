import { Outlet } from 'react-router-dom';

import EventNavbar from '../../components/EventNavbar/EventNavbar';

import styles from './Events.module.css';

export default function Events() {
  return (
    <div className={'mainWrapper'}>
      <div className={styles.eventsPageWrapper}>
        <EventNavbar />
        <Outlet />
      </div>
    </div>
  );
}
