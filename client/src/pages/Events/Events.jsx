import { useState } from 'react';

import EventList from '../../components/EventList/EventList';

import styles from './Events.module.css';

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
    </div>
  );
}
