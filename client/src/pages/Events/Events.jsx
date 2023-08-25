import { useState } from 'react';

import EventList from '../../components/EventList/EventList';

import styles from './Events.module.css';
import CreateEventForm from '../../components/CreateEventForm/CreateEventForm';
import { Link } from 'react-router-dom';

export default function Events() {
  const [eventListError, setEventListError] = useState('');

  return (
    <div className={'mainWrapper'}>
      <h1 className={styles.title}>Browse Events</h1>
      {!eventListError ? (
        <EventList setEventListError={setEventListError} />
      ) : (
        <p className={styles.listError}>{eventListError}</p>
      )}
      <Link to={'create'}>Create Event</Link>
    </div>
  );
}
