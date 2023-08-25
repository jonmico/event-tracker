import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import EventList from '../../components/EventList/EventList';

import styles from './Events.module.css';

export default function Events() {
  const [eventListError, setEventListError] = useState('');

  return (
    <div className={'mainWrapper'}>
      <Outlet />
      {/* <h1 className={styles.title}>Browse Events</h1>
      {!eventListError ? (
        <EventList setEventListError={setEventListError} />
      ) : (
        <p className={styles.listError}>{eventListError}</p>
      )} */}
      <Link to={'create'}>Create Event</Link>
      <Link to={'browse'}>Browse Events</Link>
    </div>
  );
}
