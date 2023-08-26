import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import EventNavbar from '../../components/EventNavbar/EventNavbar';

import styles from './Events.module.css';

// TODO: Redo this page. Maybe add some type of navigation menu for it.

export default function Events() {
  const [eventListError, setEventListError] = useState('');

  return (
    <div className={'mainWrapper'}>
      <EventNavbar />
      <Outlet />
      {/* <h1 className={styles.title}>Browse Events</h1>
      {!eventListError ? (
        <EventList setEventListError={setEventListError} />
      ) : (
        <p className={styles.listError}>{eventListError}</p>
      )} */}
    </div>
  );
}
