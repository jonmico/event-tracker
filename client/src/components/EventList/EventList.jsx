import { useState, useEffect } from 'react';

import EventItem from '../EventItem/EventItem';

import styles from './EventList.module.css';
import { getEvents } from '../../services/apiEvents';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  return await getEvents();
}

export default function EventList() {
  // const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [eventListError, setEventListError] = useState('');

  const eventList = useLoaderData();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       setIsLoading(true);
  //       const events = await getEvents();
  //       setEventList(events);
  //     } catch (err) {
  //       setEventListError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchEvents();
  // }, []);

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
