import { useState, useEffect } from 'react';

import EventItem from '../EventItem/EventItem';

import styles from './EventList.module.css';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export default function EventList() {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [eventListError, setEventListError] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const res = await fetch('http://localhost:3000/api/events', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          throw new Error(`Something went wrong: ${res.status} error.`);
        }
        const data = await res.json();
        setEventList(data);
      } catch (err) {
        setEventListError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const list = eventList.length ? (
    <ul className={styles.eventList}>
      {eventList.map((event) => (
        <EventItem event={event} key={event._id} />
      ))}
    </ul>
  ) : (
    <p>Uh-oh, it seems there are no events at the moment!</p>
  );

  return (
    <div className={styles.eventListWrapper}>
      <h1 className={styles.title}>Browse</h1>
      {!eventListError ? (
        <div>{isLoading ? <p>Loading...</p> : list}</div>
      ) : (
        <p className={styles.listError}>{eventListError}</p>
      )}
    </div>
  );
}
